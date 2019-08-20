import React, { Component } from "react";

const Context = React.createContext();
import moment from "moment";

class Provider extends Component {
  state = {
    modules: [],
    classes: [],
    moduleMenuIsVisible: false,
    moduleMenuActiveData: {},
    setModuleMenuActiveData: moduleData =>
      this.setState({ moduleMenuActiveData: moduleData }),
    setModuleMenuIsVisible: isVisible =>
      this.setState({ moduleMenuIsVisible: isVisible }),
    setModules: modules => {
      this.setState({
        modules: [
          ...modules.map(module => {
            return {
              id: module.id,
              group: module.class_id,
              title: module.title,
              start_time: moment(new Date(module.start_date)),
              end_time: moment(new Date(module.end_date)),
              teachers: module.teachers,
              class_id: module.class_id
            };
          })
        ]
      });
    },
    setClasses: classes => {
      this.setState({
        classes: [
          ...classes.map(currentClass => {
            return {
              id: currentClass.id,
              title: currentClass.title
            };
          })
        ]
      });
    }
  };

  render() {
    console.log(this.state);

    return (
      <MyContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const MyContext = Context;
export const MyProvider = Provider;
