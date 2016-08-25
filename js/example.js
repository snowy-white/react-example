

//该组件将“新增”和“列表显示”集合
var TodoList=React.createClass({
  //初始化数据，todolist的数据由state来控制
  getInitialState: function(){
    return {data:[],count:0,backup:[]};
  },

  //接收一个传入的数据，并将它实时更新到组件的state
  handleChange:function(rows,num,backup){
    this.setState({
      data:rows,count:num,backup:backup
    });
  },
  render: function(){
    return (
      <div>
          <h1>ToDoMVC System</h1>
          {/*集成TypeNew组件,传入onAdd和todo，实时更新数据 */}
          <TypeNew onAdd={this.handleChange} todo={this.state.data} doCount={this.state.count} doBack={this.state.backup}/>
          {/*集成TodoList组件，todo 将todolist的数据传入到组件，用于组件展示数据,onDel用于删除数据时更新*/}
          <ListTodo onDel={this.handleChange} todo={this.state.data} doCount={this.state.count} doBack={this.state.backup}/>
          {/*按条件显示任务，全部显示，显示已做的，显示未做的 */}
          <SelectTodo onSel={this.handleChange} todo={this.state.data} doCount={this.state.count} doBack={this.state.backup}/>
          {/*统计任务总数 */}
          <CountTodo  doCount={this.state.count}/>
      </div>
    );
  }
});

//TypeNew用于新增数据,从input中获取数据，将数据push到todo中，然后
//使用onAdd调用TodoList的handleChange来更新state,react自动render
var TypeNew=React.createClass({
  handleAdd:function(e){
    e.preventDefault();
    //通过refs获取dom元素,然后获取输入内容
  //  var inputDom=this.refs.inputnew.getDOMNode();
    var newthing=this.refs.inputnew.value.trim();
    //获取传入的data数据
    var rows=this.props.todo;
    //数据加1
    var num=this.props.doCount+1;
    var d=new Date();
    var t=d.getTime();
    if(newthing!=''){
      //更新数据，并使用onAdd更新到TodoList组件的state中
      rows.push({id:t,text:newthing,flag:true});
      this.props.onAdd(rows,num,rows);
    }
    this.refs.inputnew.value='';
    


  },
  render: function(){
    return (
      <form onSubmit={this.handleAdd}>
          <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" autoComplete="off"/>
      </form>
    );
  }
});

//ListTodo用于显示任务
var ListTodo=React.createClass({
  handleDel:function(e){
    var index=0;
    var delIndex = e.target.getAttribute('data-key');
    this.props.todo.map(function(item,i){
      if(item.id==delIndex){
        index=i;
      }
    })
    // 更新数据，并使用 onDel 更新到 TodoList 的 state 中，以便 React自动render
    this.props.todo.splice(index, 1);
    //数据减1
    var num=this.props.doCount-1;
    this.props.onDel(this.props.todo,num,this.props.todo);
  },

  //已做任务更新
  handleDone:function(e){
    var index = e.target.getAttribute('data-key');
    var node=document.getElementById(index);
    node.style.color="lightslategray";
    node.style.fontStyle="italic";
    this.props.todo.map(function(item){
      if(item.id==index){
        item.flag=false;
      }
    })
    this.props.onDel(this.props.todo,this.props.doCount,this.props.todo);

  },
  /*handleColor:function(){
    this.props.todo.map(function(item){
      if(item.flag==false)
      {
        return "lightslategray";
      }
      else{
        return "red";
      }
    })
  },
    handleFont:function(){
    this.props.todo.map(function(item){
      if(item.flag==false)
      {
        return "italic";
      }
      else{
        return "normal";
      }
    })
  },*/
  render: function(){
   // console.log(this.props.todo);
    return (
      <ul id="todo-list">
      {//显示数据,this.props.todo获取父组件传来的数据
        this.props.todo.map(function(item){
          return (
            <li>
                <lable id={item.id}>{item.text}</lable>
                <button id="btn2"className="done" onClick={this.handleDone} data-key={item.id}>Done</button>
                <button id="btn1"className="delete" onClick={this.handleDel} data-key={item.id}>Remove</button>
            </li>
          );
        }.bind(this)) // {/* 绑定函数的执行this - 以便 this.handleDel */}
      }
      </ul>
    );
  }
});
//按条件显示数据
var SelectTodo=React.createClass({
  handleSel:function(){
    var obj=document.getElementsByName("radio");
    for(var i=0;i<obj.length;i++){
      if(obj[i].value=="all" && obj[i].checked){
        this.props.onSel(this.props.doBack,this.props.doCount,this.props.doBack);
      }
      else if(obj[i].value=="finish" && obj[i].checked){
        var arr=[];
        this.props.doBack.map(function(item){
          if(item.flag==false){
            arr.push(item);
          }
        })
        this.props.onSel(arr,this.props.doCount,this.props.doBack);
      }
      else if(obj[i].value=="undo" && obj[i].checked){
        var arrs=[];
        this.props.doBack.map(function(item){
          if(item.flag==true){
            arrs.push(item);
          }
        })
        this.props.onSel(arrs,this.props.doCount,this.props.doBack);
      }
    }
  },
  render:function(){
    return (
      <div>
      <input type="radio" name="radio" value="all"  onClick={this.handleSel}/>All    
      <input type="radio" name="radio" value="finish" onClick={this.handleSel}/>Finished    
      <input type="radio" name="radio" value="undo" onClick={this.handleSel}/>Undo
      </div>

    );
  }

});
//CountTodo用于统计任务总数
var CountTodo=React.createClass({
  render:function(){
    return(
      <div>
      <p id="font1">Total number of task: {this.props.doCount}</p>
      </div>

    );
  }

});
//将TodoList渲染到界面
ReactDOM.render(
  <TodoList />,
  document.getElementById('content')
);