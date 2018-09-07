import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddUserModal from './component/AddUserModal';
import DeleteUserModal from './component/DeleteUserModal';
import MoreInformationModal from './component/MoreInformationModal';
import UserName from './component/UserName';
import SearchIcon from './icon/search_icon.png';

const CurrentUsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  position:fixed;
  top:0;
  width:100%;
  z-index:100;
  border: solid 1px;
  background-color: rgb(242, 245, 249);
`
const CurrentUsersText = styled.div`
  text-align: center
  font-size: 20px;
  font-weight: bold;
`

const CurrentUsers = styled.div`
  display: flex;
  flex-wrap: wrap;  
  justify-content: center;
  padding: 10px;
`
const Container = styled.div`
  margin: 15px 50px 0 50px;
`
const PrimaryHeader = styled.div`
  margin-top: 130px;
  margin-bottom: 30px;
`
const Team = styled.select`
  font-size: 30px;
  font-weight: bold;
  border: solid 1px;
`
const GoToPivotalTrackerText = styled.div`
`

const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
const ProjectName = styled.div`
  font-size: 20px;
  font-weight: bold;
`
const Options = styled.div`
`
const ResetPairButton = styled.button`
  font-size: 15px;
  margin-left: 5px;
  cursor: pointer;
  :hover {
    background-color: orange;
  }
`
const RecommendPairButton = styled.button`
  font-size: 15px;
  margin-left: 5px;
  cursor: pointer;
  :hover {
    background-color: orange;
  }
`
const AddUserButton = styled.button`
  font-size: 15px;
  margin-left: 5px;
  cursor: pointer;
  :hover {
    background-color: orange;
  }
`
const RemoveUserButton = styled.button`
  font-size: 15px;
  margin-left: 5px;
  cursor: pointer;
  :hover {
    background-color: orange;
  }
`

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom 20px;
  height: 50px;
`
const SearchByText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 20px;
`
const SearchBox = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
`
const SearchDropDown = styled.select`
  font-size: 10px;
  margin-right: 10px;
  border-color: black;
`
const SearchInput = styled.input`
  padding-left: 10px;
  font-size: 20px;
  width: 100%;
  border-color: black;
  border-width: 1px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 99% 50%;
  background-size: 25px 25px
`
const PivotalTrackerContainer = styled.div`
`

const TabContainer = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  height: 50px;
  cursor: pointer;
`
const Unstarted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-style: solid;
  border-width: 0 1px 0 0;
  width: 16.6%;
  color: ${props => props.selected === 'Unstarted' ? '#232323' : 'white'};
  font-weight: bold;
  background-color: ${props => props.selected === 'Unstarted' ? 'orange' : '#313D48'};

  :hover {
    background-color: orange;
  }
`
const Started = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center
  border-style: solid;
  border-width: 0 1px 0 0;
  width: 16.6%;
  color: ${props => props.selected === 'Started' || props.selected === '' ? '#232323' : 'white'};
  font-weight: bold;
  background-color: ${props => props.selected === 'Started' || props.selected === '' ? 'orange' : '#313D48'};

  :hover {
    background-color: orange;
  }
`
const Finished = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-style: solid;
  border-width: 0 1px 0 0;
  width: 16.6%;
  color: ${props => props.selected === 'Finished' ? '#232323' : 'white'};
  font-weight: bold;
  background-color: ${props => props.selected === 'Finished' ? 'orange' : '#313D48'};

  :hover {
    background-color: orange;
  }
`
const Delivered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-style: solid;
  border-width: 0 1px 0 0;
  width: 16.6%;
  color: ${props => props.selected === 'Delivered' ? '#232323' : 'white'};
  font-weight: bold;
  background-color: ${props => props.selected === 'Delivered' ? 'orange' : '#313D48'};

  :hover {
    background-color: orange;
  }
`
const Rejected = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-style: solid;
  border-width: 0 1px 0 0;
  width: 16.6%;
  color: ${props => props.selected === 'Rejected' ? '#232323' : 'white'};
  font-weight: bold;
  background-color: ${props => props.selected === 'Rejected' ? 'orange' : '#313D48'};

  :hover {
    background-color: orange;
  }
`
const Accepted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 17%;
  color: ${props => props.selected === 'Accepted' ? '#232323' : 'white'};
  font-weight: bold;
  background-color: ${props => props.selected === 'Accepted' ? 'orange' : '#313D48'};

  :hover {
    background-color: orange;
  }
`
const SearchTabContainer = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  height: 50px;
`
const Custom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 16.6%;
  color: #232323;
  font-weight: bold;
  background-color: orange;
  border-style: solid;
  border-width: 0 1px 0 0;

  :hover {
    background-color: orange;
  }
`
const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px;
  height: 800px;
  padding: 20px;
  overflow: scroll;
`
const Tasks = styled.div`
  display: flex;
  min-height: 110px;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  padding: 5px;
  background-color: rgb(242, 245, 249);
`
const TaskLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  border-style: solid;
  border-width: 0 1px 0 0;
  padding: 5px;
  :hover {
    background-color: rgb(232, 173, 27);
  }
`
const TaskLeftCustom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  :hover {
    background-color: rgb(232, 173, 27);
  }
`
const StoryNameContainer = styled.div`
  display: flex;
`
const StoryName = styled.a`
  margin-left: 5px;
`
const Type = styled.div`
`
const Owner = styled.div`
  display: flex;
`
const OwnerText = styled.div`
  margin-right: 5px;
`
const LastUpdate = styled.div`
`
const MoreInformation = styled.button`
  margin-top: 10px;
  width: 150px;
`
const TaskRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 5px;
  :hover {
    background-color: rgb(232, 173, 27);
  }
`
const Pair = styled.div`
  margin-right: 10px;
`
const PairUser = styled.div`
`
const ClearPairButton = styled.button`
  display: flex;
  color: red;
  height: 10px;
`

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      pivotal: [],  
      userDraggables: [],
      userPairDraggables: {
        unstarted: [],
        started: [],
        finished: [],
        delivered: [],
        rejected: [],
        accepted: []
      },
      tasks: {
        unstarted: [],
        started: [],
        finished: [],
        delivered: [],
        rejected: [],
        accepted: [],
        all: [],
        unstartedLength: undefined,
        startedLength: undefined,
        finishedLength: undefined,
        deliveredLength: undefined,
        rejectedLength: undefined,
        acceptedLength: undefined
      },
      taskDraggables: {
        unstarted: [],
        started: [],
        finished: [],
        delivered: [],
        rejected: [],
        accepted: [],
        custom: []
      },
      userIds: [],
      tabName: '',
      lastDragIndex: '',
      showAddUserModal: false,
      showDeleteUserModal: false,
      showMoreInformationModal: false,
      searchFlag: false
    };
  }

  componentDidMount() {
    this.getAllUser();
    this.getAllPivotalCredentials();
    this.getPivotalPeople();
  }

  getAllUser = () => {
    axios.get("/getAllUsers").then((response) =>{
      let users = [];
      response.data.forEach(element => {
        let user = {};
        user.id = element.id;
        user.name = element.name;
        user.location = element.location;
        user.tab = element.tab;
        users.push(user);
      });
      this.setState({users: users});
      this.handleUsersState();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateUserLocation = (name, location, id, tab) => {
    console.log(name, location, id, tab);
      axios.put("/updateUserLocation", {name: name, location: location, id: id, tab: tab})
      .then((response) =>{
      })
      .catch((error) => {
      console.log(error);
      });
  }

  getAllPivotalCredentials = () => {
    axios.get("/getAllPivotalCredential").then((response) =>{
      let pivotal = this.state.pivotal;
      response.data.forEach(element => {
        let credential = {};
        credential.id = element.id;
        credential.initial = element.initial;
        pivotal.push(credential);
      });
      this.setState({pivotal: pivotal});

      this.getAllUnStartedTasks();
      this.getAllStartedTasks();
      this.getAllFinishedTasks();
      this.getAllDeliveredTasks();
      this.getAllAcceptedTasks();
      this.getAllRejectedTasks();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updatePivotalCrendentials = (map) => {
    console.log("updating pivotal credentials");
    console.log(map);
    map.table.forEach(element => {
      let id = element.id;
      let initial = element.initial;

      axios.post("/updatePivotalCredential", {pivotalId: id, pivotalInitials: initial})
      .then((response) =>{
      })
      .catch((error) => {
      console.log(error);
      });
    })
   
  }
  
  getAllUnStartedTasks = () => {
    let storyLabel = "maintenance";
    let storyState = "unstarted"
    axios.get("/project/stories/withLabelAndState", {params: {storyLabel: storyLabel, storyState: storyState}})
    .then((response) =>{
      let tasks = {...this.state.tasks};
      tasks.unstarted = response.data;
      tasks.all = tasks.all.concat(tasks.unstarted);
      tasks.unstartedLength = tasks.unstarted.length;
      this.setState({tasks: tasks});
      //get previous task length
      this.updateTaskLength(tasks.unstartedLength, storyState);
      this.handleUserPairDraggablesInitialState(storyState);
      //if previous task length is less than current task length
        //loop through this.state.userDra
      this.handleUserPairDraggablesState(storyState);


      this.handleUnstartedTaskState();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getAllStartedTasks = () => {
    let storyLabel = "maintenance";
    let storyState = "started"
    axios.get("/project/stories/withLabelAndState", {params: {storyLabel: storyLabel, storyState: storyState}})
    .then((response) =>{
      let tasks = {...this.state.tasks};
      tasks.started = response.data;
      tasks.all = tasks.all.concat(tasks.started);
      tasks.startedLength = tasks.started.length;
      this.setState({tasks: tasks});
      this.updateTaskLength(tasks.startedLength, storyState);
      this.handleUserPairDraggablesInitialState(storyState);
      this.handleUserPairDraggablesState(storyState);
      this.handleStartedTaskState();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getAllFinishedTasks = () => {
    let storyLabel = "maintenance";
    let storyState = "finished"
    axios.get("/project/stories/withLabelAndState", {params: {storyLabel: storyLabel, storyState: storyState}})
    .then((response) =>{
      let tasks = {...this.state.tasks};
      tasks.finished = response.data;
      tasks.all = tasks.all.concat(tasks.finished);
      tasks.finishedLength = tasks.finished.length;
      this.setState({tasks: tasks});
      this.updateTaskLength(tasks.finishedLength, storyState);
      this.handleUserPairDraggablesInitialState(storyState);
      this.handleUserPairDraggablesState(storyState);
      this.handleFinishedTaskState();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getAllDeliveredTasks = () => {
    let storyLabel = "maintenance";
    let storyState = "delivered"
    axios.get("/project/stories/withLabelAndState", {params: {storyLabel: storyLabel, storyState: storyState}})
    .then((response) =>{
      let tasks = {...this.state.tasks};
      tasks.delivered = response.data;
      tasks.all = tasks.all.concat(tasks.delivered);
      tasks.deliveredLength = tasks.delivered.length;
      this.setState({tasks: tasks})
      this.updateTaskLength(tasks.deliveredLength, storyState);
      this.handleUserPairDraggablesInitialState(storyState);
      this.handleUserPairDraggablesState(storyState);
      this.handleDeliveredTaskState();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getAllAcceptedTasks = () => {
    let storyLabel = "maintenance";
    let storyState = "accepted"
    axios.get("/project/stories/withLabelAndState", {params: {storyLabel: storyLabel, storyState: storyState}})
    .then((response) =>{
      let tasks = {...this.state.tasks};
      tasks.accepted = response.data;
      tasks.all = tasks.all.concat(tasks.accepted);
      tasks.acceptedLength = tasks.accepted.length;
      this.setState({tasks: tasks});
      this.updateTaskLength(tasks.acceptedLength, storyState);
      this.handleUserPairDraggablesInitialState(storyState);
      this.handleUserPairDraggablesState(storyState);
      this.handleAcceptedTaskState();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getAllRejectedTasks = () => {
    let storyLabel = "maintenance";
    let storyState = "rejected"
    axios.get("/project/stories/withLabelAndState", {params: {storyLabel: storyLabel, storyState: storyState}})
    .then((response) =>{
      let tasks = {...this.state.tasks};
      tasks.rejected = response.data;
      tasks.all = tasks.all.concat(tasks.rejected);
      tasks.rejectedLength = tasks.rejected.length;
      this.setState({tasks: tasks});
      this.updateTaskLength(tasks.rejectedLength, storyState);
      this.handleUserPairDraggablesInitialState(storyState);
      this.handleUserPairDraggablesState(this.state.tasks.rejected, storyState);
      this.handleRejectedTaskState();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateTaskLength = (length, storyState) => {
    axios.post("/updateTaskLength", {length: length, storyState: storyState})
    .then((response) => {
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getPivotalPeople = () => {
    axios.get("/people").then((response) =>{
      let uniqueUserIds = this.state.userIds.filter((x, i, a) => a.indexOf(x) === i)
      let map = {
        table: []
     };
     uniqueUserIds.forEach(id => {
      let entity = response.data.filter(
        function (element) {
          if ((id === element.person.id)) {
            return element.person.initials;
          }
        }
      );
      map.table.push(
        {id: id, initial: entity[0].person.initials}
      );
     });

     this.updatePivotalCrendentials(map);

    })
    .catch((error) => {
      console.log(error);
    });
  }

  addUser = () => {
    let name = document.getElementById("name_input").value;
    let location = "default";
    let tab = "none";
    axios.post("/addUser", {name: name, location: location, tab: tab})
    .then((response) => {
      this.getAllUser();
    })
    .catch((error) => {
      console.log(error);
    });

    this.handleCloseAddUserModal();
  }

  deleteUser = () => {
    let name = document.getElementById("delete_name_input").value;
    axios.post("/deleteUser", {name: name})
    .then((response) => {
      this.getAllUser();
    })
    .catch((error) => {
      console.log(error);
    });

    this.handleCloseDeleteUserModal();
  }

  handleOpenAddUserModal = () => {
    this.setState({showAddUserModal : true});
  }

  handleCloseAddUserModal = () => {
    this.setState({showAddUserModal : false});
  }

  handleOpenDeleteUserModal = () => {
    this.setState({showDeleteUserModal : true});
  }

  handleCloseDeleteUserModal = () => {
    this.setState({showDeleteUserModal : false});
  }

  handleOpenMoreInformationModal = () => {
    this.setState({showMoreInformationModal : true});
  }

  handleCloseMoreInformationModal = () => {
    this.setState({showMoreInformationModal : false});
  }

  handleTabChange = (tabName) => {
    this.setState({tabName : tabName})
  }

  handleSearchFlag = (text) => {
    let searchFlag = false;
    if (text.target.value !== '') {
      searchFlag = true;
    } 

    this.filterCustomTasks(text.target.value);
    this.setState({searchFlag : searchFlag});
  }

  filterCustomTasks = (filter) => {
    let customTasks = this.state.tasks.all.filter(
      function (element) {
        return element.name.includes(filter);
      }
    );

    this.handleCustomTaskState(customTasks);
  }

  handleUsersState = () => {
    let userDraggables = [];
    this.state.users.forEach((user, index) => {
      let userDraggable = {};
      userDraggable.user = <UserName key={index} id={user.name} location={user.location} onDragStart={this.onDragStart}/>;
      userDraggable.location = user.location;
      userDraggable.tab = user.tab;
      userDraggable.id = user.id;
      userDraggable.name = user.name;
      userDraggables.push(userDraggable);
    })
    this.setState({userDraggables : userDraggables})

  }

  handleClearPair = (identifier) => {
    let state = {...this.state}
    let userAtUniqueTask; 

    if (this.state.tabName === "Unstarted") {
      userAtUniqueTask = state.userPairDraggables.unstarted.splice(identifier , 1);
      state.userPairDraggables.unstarted.splice(identifier, 0, []);
      userAtUniqueTask = userAtUniqueTask[0];
      this.state.users.forEach(user => {
        userAtUniqueTask.forEach(element => {
          if (user.name === element.name) {
            let userDraggable = element;
            userDraggable.location = "default";
            userDraggable.tab = "none";
            state.userDraggables.push(userDraggable);
            this.updateUserLocation(element.name, "default", element.id, "none");
          }
        });
      });
      this.setState({state : state});
      this.handleUnstartedTaskState();
    } else if (this.state.tabName === "Started" ){
      userAtUniqueTask = state.userPairDraggables.started.splice(identifier , 1);
      state.userPairDraggables.started.splice(identifier, 0, []);
      userAtUniqueTask = userAtUniqueTask[0];
      this.state.users.forEach(user => {
        userAtUniqueTask.forEach(element => {
          if (user.name === element.name) {
            let userDraggable = element;
            userDraggable.location = "default";
            userDraggable.tab = "none";
            state.userDraggables.push(userDraggable);
            this.updateUserLocation(element.name, "default", element.id, "none");
          }
        });
      });
      this.setState({state : state});
      this.handleStartedTaskState();
    } else if (this.state.tabName === "Finished") {
      userAtUniqueTask = state.userPairDraggables.finished.splice(identifier , 1);
      state.userPairDraggables.finished.splice(identifier, 0, []);
      userAtUniqueTask = userAtUniqueTask[0];
      this.state.users.forEach(user => {
        userAtUniqueTask.forEach(element => {
          if (user.name === element.name) {
            let userDraggable = element;
            userDraggable.location = "default";
            userDraggable.tab = "none";
            state.userDraggables.push(userDraggable);
            this.updateUserLocation(element.name, "default", element.id, "none");
          }
        });
      });
      this.setState({state : state});
      this.handleFinishedTaskState();
    } else if (this.state.tabName === "Delivered") {
      userAtUniqueTask = state.userPairDraggables.delivered.splice(identifier , 1);
      state.userPairDraggables.delivered.splice(identifier, 0, []);
      userAtUniqueTask = userAtUniqueTask[0];
      this.state.users.forEach(user => {
        userAtUniqueTask.forEach(element => {
          if (user.name === element.name) {
            let userDraggable = element;
            userDraggable.location = "default";
            userDraggable.tab = "none";
            state.userDraggables.push(userDraggable);
            this.updateUserLocation(element.name, "default", element.id, "none");
          }
        });
      });
      this.setState({state : state});
      this.handleDeliveredTaskState();
    } else if (this.state.tabName === "Rejected") {
      userAtUniqueTask = state.userPairDraggables.rejected.splice(identifier , 1);
      state.userPairDraggables.rejected.splice(identifier, 0, []);
      userAtUniqueTask = userAtUniqueTask[0];
      this.state.users.forEach(user => {
        userAtUniqueTask.forEach(element => {
          if (user.name === element.name) {
            let userDraggable = element;
            userDraggable.location = "default";
            userDraggable.tab = "none";
            state.userDraggables.push(userDraggable);
            this.updateUserLocation(element.name, "default", element.id, "none");
          }
        });
      });
      this.setState({state : state});
      this.handleRejectedTaskState();
    } else if (this.state.tabName === "Accepted") {
      userAtUniqueTask = state.userPairDraggables.accepted.splice(identifier , 1);
      state.userPairDraggables.accepted.splice(identifier, 0, []);
      userAtUniqueTask = userAtUniqueTask[0];
      this.state.users.forEach(user => {
        userAtUniqueTask.forEach(element => {
          if (user.name === element.name) {
            let userDraggable = element;
            userDraggable.location = "default";
            userDraggable.tab = "none";
            state.userDraggables.push(userDraggable);
            this.updateUserLocation(element.name, "default", element.id, "none");
          }
        });
      });
      this.setState({state : state});
      this.handleAcceptedTaskState();
    } else {
      userAtUniqueTask = state.userPairDraggables.started.splice(identifier , 1);
      state.userPairDraggables.started.splice(identifier, 0, []);
      userAtUniqueTask = userAtUniqueTask[0];
      console.log('userAtUniqueTask', userAtUniqueTask);
      this.state.users.forEach(user => {
        userAtUniqueTask.forEach(element => {
          if (user.name === element.name) {
            let userDraggable = element;
            userDraggable.location = "default";
            userDraggable.tab = "none";
            state.userDraggables.push(userDraggable);
            this.updateUserLocation(element.name, "default", element.id, "none");
          }
        });
      });

      this.setState({state : state});
      this.handleStartedTaskState();
    
    }
  }

  handleUserPairDraggablesInitialState = (storyState) => {
    let userPairDraggables = this.state.userPairDraggables;
    if (storyState === "unstarted") {
      this.state.tasks.unstarted.forEach((element, index) => {
            userPairDraggables.unstarted.push([]);
      });
    } else if (storyState === "started"){
      this.state.tasks.started.forEach((element, index) => {
          userPairDraggables.started.push([]);
      });
    } else if (storyState === "finished"){
      this.state.tasks.finished.forEach((element, index) => {
        userPairDraggables.finished.push([]);
      });
    } else if (storyState === "delivered"){
      this.state.tasks.delivered.forEach((element, index) => {
        userPairDraggables.delivered.push([]);
      });
    } else if (storyState === "rejected"){
      this.state.tasks.rejected.forEach((element, index) => {
        userPairDraggables.rejected.push([]);
      });
    } else if (storyState === "accepted"){
      this.state.tasks.accepted.forEach((element, index) => {
        userPairDraggables.accepted.push([]);
      }); 
    }
    
    this.setState({userPairDraggables : userPairDraggables})
  }

  handleUserPairDraggablesState = (storyState) => {
    let userPairDraggables = this.state.userPairDraggables;
    let userDraggables = this.state.userDraggables;

    if (storyState === "unstarted") {
      this.state.userDraggables.forEach(userDraggable => {
        if (userDraggable.location !== "default" && userDraggable.tab === "Unstarted") {
          userPairDraggables.unstarted[userDraggable.location].push(userDraggable);
        }
      });

      for (let i = 0; i < this.state.userDraggables.length; i++) {
        this.state.userDraggables.forEach((userDraggable, index) => {
          if (userDraggable.location !== "default" && userDraggable.tab === "Unstarted") {
            userDraggables.splice(index, 1);
          }
        });
      }
    } else if (storyState === "started"){
      this.state.userDraggables.forEach(userDraggable => {
        if (userDraggable.location !== "default" && userDraggable.tab === "Started") {
          userPairDraggables.started[userDraggable.location].push(userDraggable);
        }
      });

      for (let i = 0; i < this.state.userDraggables.length; i++) {
        this.state.userDraggables.forEach((userDraggable, index) => {
          if (userDraggable.location !== "default" && userDraggable.tab === "Started") {
            userDraggables.splice(index, 1);
          }
        });
      }
    } else if (storyState === "finished"){
      this.state.userDraggables.forEach(userDraggable => {
        if (userDraggable.location !== "default" && userDraggable.tab === "Finished") {
          userPairDraggables.finished[userDraggable.location].push(userDraggable);
        }
      });

      for (let i = 0; i < this.state.userDraggables.length; i++) {
        this.state.userDraggables.forEach((userDraggable, index) => {
          if (userDraggable.location !== "default" && userDraggable.tab === "Finished") {
            userDraggables.splice(index, 1);
          }
        });
      }
    } else if (storyState === "delivered"){
      this.state.userDraggables.forEach(userDraggable => {
        if (userDraggable.location !== "default" && userDraggable.tab === "Delivered") {
          userPairDraggables.delivered[userDraggable.location].push(userDraggable);
        }
      });

      for (let i = 0; i < this.state.userDraggables.length; i++) {
        this.state.userDraggables.forEach((userDraggable, index) => {
          if (userDraggable.location !== "default" && userDraggable.tab === "Delivered") {
            userDraggables.splice(index, 1);
          }
        });
      }
    } else if (storyState === "rejected"){
      this.state.userDraggables.forEach(userDraggable => {
        if (userDraggable.location !== "default" && userDraggable.tab === "Rejected") {
          userPairDraggables.rejected[userDraggable.location].push(userDraggable);
        }
      });

      for (let i = 0; i < this.state.userDraggables.length; i++) {
        this.state.userDraggables.forEach((userDraggable, index) => {
          if (userDraggable.location !== "default" && userDraggable.tab === "Rejected") {
            userDraggables.splice(index, 1);
          }
        });
      }
    } else if (storyState === "accepted"){
      this.state.userDraggables.forEach(userDraggable => {
        if (userDraggable.location !== "default" && userDraggable.tab === "Accepted") {
          userPairDraggables.accepted[userDraggable.location].push(userDraggable);
        }
      });

      for (let i = 0; i < this.state.userDraggables.length; i++) {
        this.state.userDraggables.forEach((userDraggable, index) => {
          if (userDraggable.location !== "default" && userDraggable.tab === "Accepted") {
            userDraggables.splice(index, 1);
          }
        });
      }
    }
    
    this.setState({userPairDraggables : userPairDraggables})
    this.setState({userDraggable : userDraggables})
  }
  
  handleCustomTaskState = (customTasks) => {
    let customTasksDraggable = [];
    (customTasks ? customTasks.forEach((element, index) => {
      let pivotalTrackerUrl = "https://www.pivotaltracker.com/story/show/" + element.id
      let owners = [];
      let lastUpdatedDate = new Date(element.updated_at);
      let todaysDate = new Date();
      customTasksDraggable.push(
        <Tasks key={index}>
          <TaskLeftCustom>
            <StoryNameContainer>Story Name: <StoryName href={pivotalTrackerUrl} target="_blank">{element.name}</StoryName></StoryNameContainer>
            <Type>Type: {element.story_type}</Type>
            <Owner>
              <OwnerText>Owner: </OwnerText>
                {
                  element.owner_ids.forEach((ownerId, ownerIdIndex) => {
                    let credential = this.state.pivotal.filter(function (credential) {
                      if (parseInt(credential.id) === ownerId) {
                        return credential.initial;
                      }
                    })
                    owners.push(element.owner_ids.length-1 ===  ownerIdIndex ? credential[0].initial : credential[0].initial + ', ');
                  })
                }
              {owners}
            </Owner>
            <LastUpdate>Last Update: {this.dateDiffInDays(lastUpdatedDate, todaysDate)}</LastUpdate>
            <MoreInformation onClick={this.handleOpenMoreInformationModal}>More information...</MoreInformation>
          </TaskLeftCustom>
          {/* <TaskRight onDrop={(e) => this.onDrop(e, index)} onDragOver={(e) => this.onDragOver(e)}>  */}
            {/* <Pair>Pair: </Pair> */}
            {/* <PairUser>{this.state.userPairDraggables.unstarted[index]}</PairUser> */}
            {/* <ClearPairButton onClick={() => this.handleClearPair(index)}>X</ClearPairButton> */}
          {/* </TaskRight> */}
        </Tasks>
      );
    })
    :
      null
    )

    let taskDraggables = {...this.state.taskDraggables}
    taskDraggables.custom = customTasksDraggable;

    this.setState({taskDraggables : taskDraggables});
  }

  handleUnstartedTaskState = () => {
    let unstartedTasks = [];
    let uniqueUserId = this.state.userIds;
    (this.state.tasks.unstarted ? this.state.tasks.unstarted.forEach((element, index) => {
      let pivotalTrackerUrl = "https://www.pivotaltracker.com/story/show/" + element.id
      let owners = [];
      let lastUpdatedDate = new Date(element.updated_at);
      let todaysDate = new Date();
      uniqueUserId = uniqueUserId.concat(element.owner_ids);
      unstartedTasks.push(
        <Tasks key={index}>
          <TaskLeft>
            <StoryNameContainer>Story Name: <StoryName href={pivotalTrackerUrl} target="_blank">{element.name}</StoryName></StoryNameContainer>
            <Type>Type: {element.story_type}</Type>
            <Owner>
              <OwnerText>Owner: </OwnerText>
                {
                  element.owner_ids.forEach((ownerId, ownerIdIndex) => {
                    let credential = this.state.pivotal.filter(function (credential) {
                      if (parseInt(credential.id) === ownerId) {
                        return credential.initial;
                      }
                    })
                    if (credential[0] !== undefined) {
                      owners.push(element.owner_ids.length-1 ===  ownerIdIndex ? credential[0].initial : credential[0].initial + ', ');
                      }
                  })
                }
              {owners}
            </Owner>
            <LastUpdate>Last Update: {this.dateDiffInDays(lastUpdatedDate, todaysDate)}</LastUpdate>
            <MoreInformation onClick={this.handleOpenMoreInformationModal}>More information...</MoreInformation>
          </TaskLeft>
          <TaskRight onDrop={(e) => this.onDrop(e, index)} onDragOver={(e) => this.onDragOver(e)}> 
            <Pair>Pair: </Pair>
            <PairUser>{this.state.userPairDraggables.unstarted[index].length > 0 ? this.state.userPairDraggables.unstarted[index].map(element => {return element.user}) : null}</PairUser>
            <ClearPairButton onClick={() => this.handleClearPair(index)}>X</ClearPairButton>
          </TaskRight>
        </Tasks>
      );
    })
    :
      null
    )

    let taskDraggables = this.state.taskDraggables;
    taskDraggables.unstarted = unstartedTasks;
    this.setState({taskDraggables : taskDraggables, userIds : uniqueUserId});
  }

  handleStartedTaskState = () => {
    let startedTasks = [];
    let uniqueUserId = this.state.userIds;
    (this.state.tasks.started ? this.state.tasks.started.forEach((element, index) => {
      uniqueUserId = uniqueUserId.concat(element.owner_ids);
      let pivotalTrackerUrl = "https://www.pivotaltracker.com/story/show/" + element.id
      let owners = [];
      let lastUpdatedDate = new Date(element.updated_at);
      let todaysDate = new Date();
      startedTasks.push(
        <Tasks key={index}>
          <TaskLeft>
            <StoryNameContainer>Story Name: <StoryName href={pivotalTrackerUrl} target="_blank">{element.name}</StoryName></StoryNameContainer>
            <Type>Type: {element.story_type}</Type>
            <Owner>
              <OwnerText>Owner: </OwnerText>
                {
                  element.owner_ids.forEach((ownerId, ownerIdIndex) => {
                    let credential = this.state.pivotal.filter(function (credential) {
                      if (parseInt(credential.id) === ownerId) {
                        return credential;
                      }
                    })
                    if (credential[0] !== undefined) {
                    owners.push(element.owner_ids.length-1 ===  ownerIdIndex ? credential[0].initial : credential[0].initial + ', ');
                    }
                  })
                }
              {owners}
            </Owner>
            <LastUpdate>Last Update: {this.dateDiffInDays(lastUpdatedDate, todaysDate)}</LastUpdate>
            <MoreInformation onClick={this.handleOpenMoreInformationModal}>More information...</MoreInformation>
          </TaskLeft>
          <TaskRight onDrop={(e) => this.onDrop(e, index)} onDragOver={(e) => this.onDragOver(e)}> 
            <Pair>Pair: </Pair>
            <PairUser>{this.state.userPairDraggables.started[index].length > 0 ? this.state.userPairDraggables.started[index].map(element => {return element.user}) : null}</PairUser>
            <ClearPairButton onClick={() => this.handleClearPair(index)}>X</ClearPairButton>
          </TaskRight>
        </Tasks>
      );
    })
    :
    null
    )

    let taskDraggables = this.state.taskDraggables;
    taskDraggables.started = startedTasks;
    this.setState({taskDraggables : taskDraggables, userIds : uniqueUserId});
  }

  handleFinishedTaskState = () => {
    let finishedTasks = [];
    let uniqueUserId = this.state.userIds;
    (this.state.tasks.finished ? this.state.tasks.finished.forEach((element, index) => {
      uniqueUserId = uniqueUserId.concat(element.owner_ids);
      let pivotalTrackerUrl = "https://www.pivotaltracker.com/story/show/" + element.id
      let owners = [];
      let lastUpdatedDate = new Date(element.updated_at);
      let todaysDate = new Date();
      finishedTasks.push(
        <Tasks key={index}>
          <TaskLeft>
            <StoryNameContainer>Story Name: <StoryName href={pivotalTrackerUrl} target="_blank">{element.name}</StoryName></StoryNameContainer>
            <Type>Type: {element.story_type}</Type>
            <Owner>
              <OwnerText>Owner: </OwnerText>
                {
                  element.owner_ids.forEach((ownerId, ownerIdIndex) => {
                    let credential = this.state.pivotal.filter(function (credential) {
                      if (parseInt(credential.id) === ownerId) {
                        return credential.initial;
                      }
                    })
                    if (credential[0] !== undefined) {
                      owners.push(element.owner_ids.length-1 ===  ownerIdIndex ? credential[0].initial : credential[0].initial + ', ');
                      }
                  })
                }
              {owners}
            </Owner>
            <LastUpdate>Last Update: {this.dateDiffInDays(lastUpdatedDate, todaysDate)}</LastUpdate>
            <MoreInformation onClick={this.handleOpenMoreInformationModal}>More information...</MoreInformation>
          </TaskLeft>
          <TaskRight onDrop={(e) => this.onDrop(e, index)} onDragOver={(e) => this.onDragOver(e)}> 
            <Pair>Pair: </Pair>
            <PairUser>{this.state.userPairDraggables.finished[index].length > 0 ? this.state.userPairDraggables.finished[index].map(element => {return element.user}) : null}</PairUser>
            <ClearPairButton onClick={() => this.handleClearPair(index)}>X</ClearPairButton>
          </TaskRight>
        </Tasks>
      );
    })
    :
    null
    )

    let taskDraggables = this.state.taskDraggables;
    taskDraggables.finished = finishedTasks;
    this.setState({taskDraggables : taskDraggables, userIds : uniqueUserId});
  }

  handleDeliveredTaskState = () => {
    let deliveredTasks = [];
    let uniqueUserId = this.state.userIds;
    (this.state.tasks.delivered ? this.state.tasks.delivered.forEach((element, index) => {
      uniqueUserId = uniqueUserId.concat(element.owner_ids);
      let pivotalTrackerUrl = "https://www.pivotaltracker.com/story/show/" + element.id
      let owners = [];
      let lastUpdatedDate = new Date(element.updated_at);
      let todaysDate = new Date();
      deliveredTasks.push(
        <Tasks key={index}>
          <TaskLeft>
            <StoryNameContainer>Story Name: <StoryName href={pivotalTrackerUrl} target="_blank">{element.name}</StoryName></StoryNameContainer>
            <Type>Type: {element.story_type}</Type>
            <Owner>
              <OwnerText>Owner: </OwnerText>
                {
                  element.owner_ids.forEach((ownerId, ownerIdIndex) => {
                    let credential = this.state.pivotal.filter(function (credential) {
                      if (parseInt(credential.id) === ownerId) {
                        return credential.initial;
                      }
                    })
                    if (credential[0] !== undefined) {
                      owners.push(element.owner_ids.length-1 ===  ownerIdIndex ? credential[0].initial : credential[0].initial + ', ');
                      }
                  })
                }
              {owners}
            </Owner>
            <LastUpdate>Last Update: {this.dateDiffInDays(lastUpdatedDate, todaysDate)}</LastUpdate>
            <MoreInformation onClick={this.handleOpenMoreInformationModal}>More information...</MoreInformation>
          </TaskLeft>
          <TaskRight onDrop={(e) => this.onDrop(e, index)} onDragOver={(e) => this.onDragOver(e)}> 
            <Pair>Pair: </Pair>
            <PairUser>{this.state.userPairDraggables.delivered[index].length > 0 ? this.state.userPairDraggables.delivered[index].map(element => {return element.user}) : null}</PairUser>
            <ClearPairButton onClick={() => this.handleClearPair(index)}>X</ClearPairButton>
          </TaskRight>
        </Tasks>
      );
    })
    :
    null
    )

    let taskDraggables = this.state.taskDraggables;
    taskDraggables.delivered = deliveredTasks;
    this.setState({taskDraggables : taskDraggables, userIds : uniqueUserId});
  }

  handleRejectedTaskState = () => {
    let rejectedTasks = [];
    let uniqueUserId = this.state.userIds;
    (this.state.tasks.rejected ? this.state.tasks.rejected.forEach((element, index) => {
      uniqueUserId = uniqueUserId.concat(element.owner_ids);
      let pivotalTrackerUrl = "https://www.pivotaltracker.com/story/show/" + element.id
      let owners = [];
      let lastUpdatedDate = new Date(element.updated_at);
      let todaysDate = new Date();
      rejectedTasks.push(
        <Tasks key={index}>
          <TaskLeft>
            <StoryNameContainer>Story Name: <StoryName href={pivotalTrackerUrl} target="_blank">{element.name}</StoryName></StoryNameContainer>
            <Type>Type: {element.story_type}</Type>
            <Owner>
              <OwnerText>Owner: </OwnerText>
                {
                  element.owner_ids.forEach((ownerId, ownerIdIndex) => {
                    let credential = this.state.pivotal.filter(function (credential) {
                      if (parseInt(credential.id) === ownerId) {
                        return credential.initial;
                      }
                    })
                    owners.push(element.owner_ids.length-1 ===  ownerIdIndex ? credential[0].initial : credential[0].initial + ', ');
                  })
                }
              {owners}
            </Owner>
            <LastUpdate>Last Update: {this.dateDiffInDays(lastUpdatedDate, todaysDate)}</LastUpdate>
            <MoreInformation onClick={this.handleOpenMoreInformationModal}>More information...</MoreInformation>
          </TaskLeft>
          <TaskRight onDrop={(e) => this.onDrop(e, index)} onDragOver={(e) => this.onDragOver(e)}> 
            <Pair>Pair: </Pair>
            <PairUser>{this.state.userPairDraggables.rejected[index].length > 0 ? this.state.userPairDraggables.rejected[index].map(element => {return element.user}) : null}</PairUser>
            <ClearPairButton onClick={() => this.handleClearPair(index)}>X</ClearPairButton>
          </TaskRight>
        </Tasks>
      );
    })
    :
    null
    )

    let taskDraggables = this.state.taskDraggables;
    taskDraggables.rejected = rejectedTasks;
    this.setState({taskDraggables : taskDraggables, userIds : uniqueUserId});
  }

  handleAcceptedTaskState = () => {
    let acceptedTasks = [];
    let uniqueUserId = this.state.userIds;
    (this.state.tasks.accepted ? this.state.tasks.accepted.forEach((element, index) => {
      uniqueUserId = uniqueUserId.concat(element.owner_ids);
      let pivotalTrackerUrl = "https://www.pivotaltracker.com/story/show/" + element.id
      let owners = [];
      let lastUpdatedDate = new Date(element.updated_at);
      let todaysDate = new Date();
      acceptedTasks.push(
        <Tasks key={index}>
          <TaskLeft>
            <StoryNameContainer>Story Name: <StoryName href={pivotalTrackerUrl} target="_blank">{element.name}</StoryName></StoryNameContainer>
            <Type>Type: {element.story_type}</Type>
            <Owner>
              <OwnerText>Owner: </OwnerText>
                {
                  element.owner_ids.forEach((ownerId, ownerIdIndex) => {
                    let credential = this.state.pivotal.filter(function (credential) {
                      if (parseInt(credential.id) === ownerId) {
                        return credential.initial;
                      }
                    })
                    owners.push(element.owner_ids.length-1 ===  ownerIdIndex ? credential[0].initial : credential[0].initial + ', ');
                  })
                }
              {owners}
            </Owner>
            <LastUpdate>Last Update: {this.dateDiffInDays(lastUpdatedDate, todaysDate)}</LastUpdate>
            <MoreInformation onClick={this.handleOpenMoreInformationModal}>More information...</MoreInformation>
          </TaskLeft>
          <TaskRight onDrop={(e) => this.onDrop(e, index)} onDragOver={(e) => this.onDragOver(e)}> 
            <Pair>Pair: </Pair>
            <PairUser>{this.state.userPairDraggables.accepted[index].length > 0 ? this.state.userPairDraggables.accepted[index].map(element => {return element.user}) : null}</PairUser>
            <ClearPairButton onClick={() => this.handleClearPair(index)}>X</ClearPairButton>
          </TaskRight>
        </Tasks>
      );
    })
    :
    null
    )

    let taskDraggables = this.state.taskDraggables;
    taskDraggables.accepted = acceptedTasks;
    this.setState({taskDraggables : taskDraggables, userIds : uniqueUserId});
  }
  
  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDragStart = (ev, id) => {
    console.log('dragstart: ', id)
    ev.dataTransfer.setData("id", id);

    let lastDragIndex;
    this.state.userDraggables.forEach(element => {
      if (id === element.name) {
        lastDragIndex = element.location;
      }
    })

    if (lastDragIndex === undefined) {
      if (this.state.tabName === "Unstarted") {
        this.state.userPairDraggables.unstarted.forEach(element => {
          if (element.length > 0) {
            element.forEach(innerElement => {
              if (id === innerElement.name) {
                lastDragIndex = innerElement.location;
              }
            })
          }
        }) 
      } else if (this.state.tabName === "Started" || this.state.tabName === "") {
        this.state.userPairDraggables.started.forEach(element => {
          if (element.length > 0) {
            element.forEach(innerElement => {
              if (id === innerElement.name) {
                lastDragIndex = innerElement.location;
              }
            })
          }
        }) 
      } else if (this.state.tabName === "Finished") {
        this.state.userPairDraggables.finished.forEach(element => {
          if (element.length > 0) {
            element.forEach(innerElement => {
              if (id === innerElement.name) {
                lastDragIndex = innerElement.location;
              }
            })
          }
        }) 
      } else if (this.state.tabName === "Delivered") {
        this.state.userPairDraggables.delivered.forEach(element => {
          if (element.length > 0) {
            element.forEach(innerElement => {
              if (id === innerElement.name) {
                lastDragIndex = innerElement.location;
              }
            })
          }
        }) 
      } else if (this.state.tabName === "Rejected") {
        this.state.userPairDraggables.rejected.forEach(element => {
          if (element.length > 0) {
            element.forEach(innerElement => {
              if (id === innerElement.name) {
                lastDragIndex = innerElement.location;
              }
            })
          }
        }) 
      } else if (this.state.tabName === "Accepted") {
        this.state.userPairDraggables.accepted.forEach(element => {
          if (element.length > 0) {
            element.forEach(innerElement => {
              if (id === innerElement.name) {
                lastDragIndex = innerElement.location;
              }
            })
          }
        }) 
      }
    }

    this.setState({lastDragIndex : lastDragIndex});
  }


  onDrop = (ev, identifier) => {
    let id = ev.dataTransfer.getData("id");
    console.log('name ', id);
    console.log('new location ', identifier);
    console.log("previous location", this.state.lastDragIndex);
    let state = {...this.state};
    let indexOfMatchedName;
    this.state.userDraggables.forEach((element, index) => {
      if (element.user.props.id === id) {
        indexOfMatchedName = index;
      }
    });

    let userAtUniqueTask;

    if (this.state.tabName === "Unstarted") {
      if (this.state.lastDragIndex === "default") {
        userAtUniqueTask = state.userDraggables.splice(indexOfMatchedName, 1)[0];
        userAtUniqueTask.location = identifier;
        userAtUniqueTask.tab = "Unstarted";
        state.userPairDraggables.unstarted[identifier].push(userAtUniqueTask);
        this.updateUserLocation(userAtUniqueTask.name, identifier, userAtUniqueTask.id, "Unstarted");
        state.lastDragIndex = identifier;
      } else {
        let userPairDraggablesIndex;
        state.userPairDraggables.unstarted[this.state.lastDragIndex].forEach((element, index) => {
          if (element.name === id) {
            userAtUniqueTask = element;
            userPairDraggablesIndex = index;
          }
        });
        userAtUniqueTask.location = identifier+"";
        state.userPairDraggables.unstarted[identifier].push(userAtUniqueTask);
        state.userPairDraggables.unstarted[this.state.lastDragIndex].splice(userPairDraggablesIndex, 1);
        state.userPairDraggables.unstarted[identifier].forEach(element => {
          this.updateUserLocation(element.name, identifier, element.id, "Unstarted");
        })
        state.lastDragIndex = identifier;
      }
      this.setState({state : state});
      this.handleUnstartedTaskState();
    } else if (this.state.tabName === "Started" || this.state.tabName === ""){
      if (this.state.lastDragIndex === "default") {
        userAtUniqueTask = state.userDraggables.splice(indexOfMatchedName, 1)[0];
        userAtUniqueTask.location = identifier;
        userAtUniqueTask.tab = "Started";
        state.userPairDraggables.started[identifier].push(userAtUniqueTask);
        this.updateUserLocation(userAtUniqueTask.name, identifier, userAtUniqueTask.id, "Started");
        state.lastDragIndex = identifier;
      } else {
        let userPairDraggablesIndex;
        state.userPairDraggables.started[this.state.lastDragIndex].forEach((element, index) => {
          if (element.name === id) {
            userAtUniqueTask = element;
            userPairDraggablesIndex = index;
          }
        });
        userAtUniqueTask.location = identifier+"";
        state.userPairDraggables.started[identifier].push(userAtUniqueTask);
        state.userPairDraggables.started[this.state.lastDragIndex].splice(userPairDraggablesIndex, 1);
        state.userPairDraggables.started[identifier].forEach(element => {
          this.updateUserLocation(element.name, identifier, element.id, "Started");
        })
        state.lastDragIndex = identifier;
      }
      this.setState({state : state});
      this.handleStartedTaskState();
    } else if (this.state.tabName === "Finished") {
      if (this.state.lastDragIndex === "default") {
        userAtUniqueTask = state.userDraggables.splice(indexOfMatchedName, 1)[0];
        userAtUniqueTask.location = identifier;
        userAtUniqueTask.tab = "Finished";
        state.userPairDraggables.finished[identifier].push(userAtUniqueTask);
        this.updateUserLocation(userAtUniqueTask.name, identifier, userAtUniqueTask.id, "Finished");
        state.lastDragIndex = identifier;
      } else {
        let userPairDraggablesIndex;
        state.userPairDraggables.finished[this.state.lastDragIndex].forEach((element, index) => {
          if (element.name === id) {
            userAtUniqueTask = element;
            userPairDraggablesIndex = index;
          }
        });
        userAtUniqueTask.location = identifier+"";
        state.userPairDraggables.finished[identifier].push(userAtUniqueTask);
        state.userPairDraggables.finished[this.state.lastDragIndex].splice(userPairDraggablesIndex, 1);
        state.userPairDraggables.finished[identifier].forEach(element => {
          this.updateUserLocation(element.name, identifier, element.id, "Finished");
        })
        state.lastDragIndex = identifier;
      }
      this.setState({state : state});
      this.handleFinishedTaskState();
    } else if (this.state.tabName === "Delivered") {
      if (this.state.lastDragIndex === "default") {
        userAtUniqueTask = state.userDraggables.splice(indexOfMatchedName, 1)[0];
        userAtUniqueTask.location = identifier;
        userAtUniqueTask.tab = "Delivered";
        state.userPairDraggables.delivered[identifier].push(userAtUniqueTask);
        this.updateUserLocation(userAtUniqueTask.name, identifier, userAtUniqueTask.id, "Delivered");
        state.lastDragIndex = identifier;
      } else {
        let userPairDraggablesIndex;
        state.userPairDraggables.delivered[this.state.lastDragIndex].forEach((element, index) => {
          if (element.name === id) {
            userAtUniqueTask = element;
            userPairDraggablesIndex = index;
          }
        });
        userAtUniqueTask.location = identifier+"";
        state.userPairDraggables.delivered[identifier].push(userAtUniqueTask);
        state.userPairDraggables.delivered[this.state.lastDragIndex].splice(userPairDraggablesIndex, 1);
        state.userPairDraggables.delivered[identifier].forEach(element => {
          this.updateUserLocation(element.name, identifier, element.id, "Delivered");
        })
        state.lastDragIndex = identifier;
      }
      this.setState({state : state});
      this.handleDeliveredTaskState();
    } else if (this.state.tabName === "Rejected") {
      if (this.state.lastDragIndex === "default") {
        userAtUniqueTask = state.userDraggables.splice(indexOfMatchedName, 1)[0];
        userAtUniqueTask.location = identifier;
        userAtUniqueTask.tab = "Rejected";
        state.userPairDraggables.rejected[identifier].push(userAtUniqueTask);
        this.updateUserLocation(userAtUniqueTask.name, identifier, userAtUniqueTask.id, "Rejected");
        state.lastDragIndex = identifier;
      } else {
        let userPairDraggablesIndex;
        state.userPairDraggables.rejected[this.state.lastDragIndex].forEach((element, index) => {
          if (element.name === id) {
            userAtUniqueTask = element;
            userPairDraggablesIndex = index;
          }
        });
        userAtUniqueTask.location = identifier+"";
        state.userPairDraggables.rejected[identifier].push(userAtUniqueTask);
        state.userPairDraggables.rejected[this.state.lastDragIndex].splice(userPairDraggablesIndex, 1);
        state.userPairDraggables.rejected[identifier].forEach(element => {
          this.updateUserLocation(element.name, identifier, element.id, "Rejected");
        })
        state.lastDragIndex = identifier;
      }
      this.setState({state : state});
      this.handleRejectedTaskState();
    } else if (this.state.tabName === "Accepted") {
      if (this.state.lastDragIndex === "default") {
        userAtUniqueTask = state.userDraggables.splice(indexOfMatchedName, 1)[0];
        userAtUniqueTask.location = identifier;
        userAtUniqueTask.tab = "Accepted";
        state.userPairDraggables.accepted[identifier].push(userAtUniqueTask);
        this.updateUserLocation(userAtUniqueTask.name, identifier, userAtUniqueTask.id, "Accepted");
        state.lastDragIndex = identifier;
      } else {
        let userPairDraggablesIndex;
        state.userPairDraggables.accepted[this.state.lastDragIndex].forEach((element, index) => {
          if (element.name === id) {
            userAtUniqueTask = element;
            userPairDraggablesIndex = index;
          }
        });
        userAtUniqueTask.location = identifier+"";
        state.userPairDraggables.accepted[identifier].push(userAtUniqueTask);
        state.userPairDraggables.accepted[this.state.lastDragIndex].splice(userPairDraggablesIndex, 1);
        state.userPairDraggables.accepted[identifier].forEach(element => {
          this.updateUserLocation(element.name, identifier, element.id, "Accepted");
        })
        state.lastDragIndex = identifier;
      }
      this.setState({state : state});
      this.handleAcceptedTaskState();
    }
  }

  dateDiffInDays = (a, b) => {
    let _MS_PER_DAY = 1000 * 60 * 60 * 24;
    let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    let utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    let dateDiff = Math.floor((utc2 - utc1) / _MS_PER_DAY);
  
    return dateDiff === 0 ? "Started today" : dateDiff + " days ago";
  }

  handleResetPair = () => {
    let state = {...this.state};
    let userAtUniqueTask;
    state.userPairDraggables.unstarted.forEach((element, index) => {
      if (element !== undefined || element.length > 0) {
        userAtUniqueTask = state.userPairDraggables.unstarted.splice(index , 1);
        state.userPairDraggables.unstarted.splice(index, 0, []);
        userAtUniqueTask = userAtUniqueTask[0];
        this.state.users.forEach(user => {
          userAtUniqueTask.forEach(element => {
            if (user.name === element.name) {
              element.location = "default";
              element.tab = "none"
              state.userDraggables.push(element);
              this.updateUserLocation(element.name, "default", element.id, "none");
            }
          });
        });
      }
    })

    state.userPairDraggables.started.forEach((element, index) => {
      if (element !== undefined || element.length > 0) {
        userAtUniqueTask = state.userPairDraggables.started.splice(index , 1);
        state.userPairDraggables.started.splice(index, 0, []);
        userAtUniqueTask = userAtUniqueTask[0];
        this.state.users.forEach(user => {
          userAtUniqueTask.forEach(element => {
            if (user.name === element.name) {
              element.location = "default";
              element.tab = "none"
              state.userDraggables.push(element);
              this.updateUserLocation(element.name, "default", element.id, "none");
            }
          });
        });
      }
    })

    state.userPairDraggables.finished.forEach((element, index) => {
      if (element !== undefined || element.length > 0) {
        userAtUniqueTask = state.userPairDraggables.finished.splice(index , 1);
        state.userPairDraggables.finished.splice(index, 0, []);
        userAtUniqueTask = userAtUniqueTask[0];
        this.state.users.forEach(user => {
          userAtUniqueTask.forEach(element => {
            if (user.name === element.name) {
              element.location = "default";
              element.tab = "none"
              state.userDraggables.push(element);
              this.updateUserLocation(element.name, "default", element.id, "none");
            }
          });
        });
      }
    })

    state.userPairDraggables.delivered.forEach((element, index) => {
      if (element !== undefined || element.length > 0) {
        userAtUniqueTask = state.userPairDraggables.delivered.splice(index , 1);
        state.userPairDraggables.delivered.splice(index, 0, []);
        userAtUniqueTask = userAtUniqueTask[0];
        this.state.users.forEach(user => {
          userAtUniqueTask.forEach(element => {
            if (user.name === element.name) {
              element.location = "default";
              element.tab = "none"
              state.userDraggables.push(element);
              this.updateUserLocation(element.name, "default", element.id, "none");
            }
          });
        });
      }
    })

    state.userPairDraggables.rejected.forEach((element, index) => {
      if (element !== undefined || element.length > 0) {
        userAtUniqueTask = state.userPairDraggables.rejected.splice(index , 1);
        state.userPairDraggables.rejected.splice(index, 0, []);
        userAtUniqueTask = userAtUniqueTask[0];
        this.state.users.forEach(user => {
          userAtUniqueTask.forEach(element => {
            if (user.name === element.name) {
              element.location = "default";
              element.tab = "none"
              state.userDraggables.push(element);
              this.updateUserLocation(element.name, "default", element.id, "none");
            }
          });
        });
      }
    })
      
    state.userPairDraggables.accepted.forEach((element, index) => {
      if (element !== undefined || element.length > 0) {
        userAtUniqueTask = state.userPairDraggables.accepted.splice(index , 1);
        state.userPairDraggables.accepted.splice(index, 0, []);
        userAtUniqueTask = userAtUniqueTask[0];
        this.state.users.forEach(user => {
          userAtUniqueTask.forEach(element => {
            if (user.name === element.name) {
              element.location = "default";
              element.tab = "none"
              state.userDraggables.push(element);
              this.updateUserLocation(element.name, "default", element.id, "none");
            }
          });
        });
      }
    })

    this.setState({state : state});
    this.handleUnstartedTaskState();
    this.handleStartedTaskState();
    this.handleFinishedTaskState();
    this.handleDeliveredTaskState();
    this.handleRejectedTaskState();
    this.handleAcceptedTaskState();
  }

  render() {
    console.log('this.state.userDraggables', this.state.userDraggables);
    console.log('this.state.userPairDraggables', this.state.userPairDraggables);
    return (
      <div>
        <CurrentUsersContainer>
              <CurrentUsersText>The Engineers:  </CurrentUsersText>
              <CurrentUsers>
                {
                  this.state.userDraggables[0] !== undefined 
                  ? 
                  (this.state.userDraggables.map(userDraggable => {
                    if(userDraggable.location === "default") {
                      return userDraggable.user
                    }
                  }))
                  :
                  null
                }
              </CurrentUsers>
        </CurrentUsersContainer>
        <Container>
          <AddUserModal 
            showAddUserModal={this.state.showAddUserModal}
            handleCloseAddUserModal={this.handleCloseAddUserModal}
            addUser={this.addUser}
          />
          <DeleteUserModal 
            showDeleteUserModal={this.state.showDeleteUserModal}
            handleCloseDeleteUserModal={this.handleCloseDeleteUserModal}
            deleteUser={this.deleteUser}
          />
          <MoreInformationModal 
            showMoreInformationModal={this.state.showMoreInformationModal}
            handleCloseMoreInformationModal={this.handleCloseMoreInformationModal}
          />
          <PrimaryHeader>
            <Team>
              <option value="maintenance">Maintenance Team</option>
              <option value="validation">Validation Team</option>
              <option value="execution">Execution Team</option>
            </Team>
          </PrimaryHeader>
          <MenuBarContainer>
            <ProjectName>Price Maintenance</ProjectName>
            <Options>
              <ResetPairButton onClick={this.handleResetPair}>Reset Pairs</ResetPairButton>
              {/* <RecommendPairButton>Reccommend Pairs</RecommendPairButton> */}
              <AddUserButton onClick={this.handleOpenAddUserModal}>Add Engineer</AddUserButton>
              <RemoveUserButton onClick={this.handleOpenDeleteUserModal}>Remove Engineer</RemoveUserButton>
            </Options>
          </MenuBarContainer>
          <SearchContainer>
            <SearchByText>Search By:</SearchByText>
            <SearchBox>
              <SearchDropDown>
                <option value="story_name">Story Name</option>
                <option value="story_number">Story #</option>
                <option value="description">Description</option>
                <option value="owner">Owner</option>
              </SearchDropDown>
              <SearchInput type="text" placeholder="Search for..." onChange={this.handleSearchFlag}></SearchInput>
            </SearchBox>
          </SearchContainer>
          <PivotalTrackerContainer>
            {
              this.state.searchFlag 
              ? 
              <SearchTabContainer>
                <Custom>Custom</Custom>
              </SearchTabContainer>
              :
              <TabContainer>
                <Unstarted onClick={() => this.handleTabChange("Unstarted")} selected={this.state.tabName}>Unstarted</Unstarted>
                <Started onClick={() => this.handleTabChange("Started")} selected={this.state.tabName}>Started</Started>
                <Finished onClick={() => this.handleTabChange("Finished")} selected={this.state.tabName}>Finished</Finished>
                <Delivered onClick={() => this.handleTabChange("Delivered")} selected={this.state.tabName}>Delivered</Delivered>
                <Rejected onClick={() => this.handleTabChange("Rejected")} selected={this.state.tabName}>Rejected</Rejected>
                <Accepted onClick={() => this.handleTabChange("Accepted")} selected={this.state.tabName}>Accepted</Accepted>
              </TabContainer>
              
            }
            <TasksContainer>
              {
                this.state.searchFlag
                ?
                  this.state.taskDraggables.custom
                :
                this.state.tabName === "Unstarted"
                ?
                  this.state.taskDraggables.unstarted
                :
                this.state.tabName === "Started" 
                ?
                  this.state.taskDraggables.started
                :
                this.state.tabName === "Finished"
                ?
                  this.state.taskDraggables.finished
                :
                this.state.tabName === "Delivered"
                ?
                  this.state.taskDraggables.delivered
                :
                this.state.tabName === "Rejected"
                ?
                  this.state.taskDraggables.rejected
                :
                this.state.tabName === "Accepted"
                ?
                  this.state.taskDraggables.accepted
                :
                  this.state.taskDraggables.started
              }
            </TasksContainer>
          </PivotalTrackerContainer>
        </Container>
      </div>
    )
  }



    
  }

  export default Main;