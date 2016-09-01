/* 
    A component of TodoList
    add:add a new task
    show:show all tasks
    select task:show all tasks or finished tasks or activity tasks
    count:count the number of tasks
 */
var TodoList=React.createClass({
  getInitialState: function(){
    return {task:[],count:0,flag:"all"};
  },
  handleChange:function(data,num,flag){
    this.setState({
      task:data,count:num,flag:flag
    });
  },
  render: function(){
    return (
      <div>
          <h1>ToDoMVC System</h1>
          <AddNewTask addTask={this.handleChange} tasks={this.state.task} counts={this.state.count} state={this.state.flag}/>
          <ShowTask delTask={this.handleChange} tasks={this.state.task} counts={this.state.count} state={this.state.flag}/>
          <SelectTask selTask={this.handleChange} tasks={this.state.task} counts={this.state.count} state={this.state.flag}/>
          <CountTask  counts={this.state.count} tasks={this.state.task} />
      </div>
    );
  }
});

/*
    A component of AddNewTask:
    write a new task in the input to "Enter" to add a new task
*/
var AddNewTask=React.createClass({
  handleAdd:function(e){
    e.preventDefault();
    var newthing=this.refs.inputnew.value.trim();
    var rows=this.props.tasks;
    var num=this.props.counts+1;
    var d=new Date();
    var t=d.getTime();
    if(newthing!=''){
      rows.push({id:t,text:newthing,flag:true});
      this.props.addTask(rows,num,this.props.state);
    }
  },
  getInitialState: function() {
    return {value: ''};
  },
  handleChangeValue: function(event) {
    this.setState({value: event.target.value});
  },
  render: function(){
    var value=this.state.value;
    return (
      <div>
      <form onSubmit={this.handleAdd}>
          <input type="text" ref="inputnew" id="todo-new" placeholder="typing a newthing todo" value={value} onChange={this.handleChangeValue}/> 
      </form>
      </div>
      
    );
  }
});

/*
    A component of ShowTask:
    show the tasks in the view
*/
var ShowTask=React.createClass({
  handleDel:function(e){
    var index=0;
    var delIndex = e.target.getAttribute('data-key');
    this.props.tasks.map(function(item,i){
      if(item.id==delIndex){
        index=i;
      }
    })
   delete this.props.tasks[index];
    var num=this.props.counts-1;
    this.props.delTask(this.props.tasks,num,this.props.state);
  },
  handleDone:function(e){
    var index = e.target.getAttribute('data-key');
    var node=document.getElementById(index);
    this.props.tasks.map(function(item){
      if(item.id==index){
        item.flag=false;
      }
    })
    this.props.delTask(this.props.tasks,this.props.counts,this.props.state);
  },
  handleFilterU:function(element){
      return element.flag==true;

  },
  handleFilterF:function(element){
      return element.flag==false;

  },
  render:function(){
    var arr=[];
    if(this.props.state=="all"){
         arr=this.props.tasks;
    }
    else if(this.props.state=="finish"){
         arr=this.props.tasks.filter(this.handleFilterF);
    }
    else if(this.props.state=="undo"){
         arr=this.props.tasks.filter(this.handleFilterU);
    }
    return (
      <ul id="todo-list">
      {
        arr.map(function(item){
          return (
            <Atask item={item} key={item.id} Done={this.handleDone} Del={this.handleDel}/>
          );
        }.bind(this)) 
      }
      </ul>
    );
  }
});

/*
    A component of Atask:
    take each task as a independent component
 */
var Atask=React.createClass({
   handleStyle:function(item){
    if(item.flag==true)
    {
        return "font3";
    }
    else{
        return "font2";
    }
  },
  render:function(){
    return (
      <li>
          <lable id={this.props.item.id} className={this.handleStyle(this.props.item)}>{this.props.item.text}</lable>
          <button className="done" onClick={this.props.Done} data-key={this.props.item.id}>Done</button>
          <button className="delete" onClick={this.props.Del} data-key={this.props.item.id}>Remove</button>
      </li>
    );
  }
});

/*
    A component of SelectTask:
    show the tasks of all or finished or undo
 */
var SelectTask=React.createClass({
   handleSel:function(){
    var obj=document.getElementsByName("radio");
    for(var i=0;i<obj.length;i++){
      if(obj[i].value=="all" && obj[i].checked){
        this.props.selTask(this.props.tasks,this.props.counts,"all");
      }
      else if(obj[i].value=="finish" && obj[i].checked){
        this.props.selTask(this.props.tasks,this.props.counts,"finish");
      }
      else if(obj[i].value=="undo" && obj[i].checked){
        this.props.selTask(this.props.tasks,this.props.counts,"undo");
      }
    }
  },
  render:function(){
    return (
      <div className="ra">
      <input type="radio" name="radio" value="all"  onClick={this.handleSel}/>All    
      <input type="radio" name="radio" value="finish" onClick={this.handleSel}/>Finished    
      <input type="radio" name="radio" value="undo" onClick={this.handleSel}/>Undo
      </div>

    );
  }
});

/*
    A component of CountTask:
    count the number of all tasks,finished tasks and undo tasks
 */
var CountTask=React.createClass({
  render:function(){
    var count1=0;
    var count2=0;
    this.props.tasks.map(function(item){
        if(item.flag==true){
            count1++;
        }
        else{
            count2++;
        }
    })
    return(
      <div className="num">
      <p> Total task: {this.props.counts}    |    Finished task：{count2}    |    Undo task：{count1}</p>
      </div>
    );

  }
});

/*
   Render the component of TodoList
*/
ReactDOM.render(
  <TodoList />,
  document.getElementById('content')
);