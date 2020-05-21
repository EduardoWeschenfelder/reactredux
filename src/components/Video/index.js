import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => (
  <div>
    {/* só abre o módulo após escolher */}
    {activeModule.title ? (
      <div>
        <strong>Módulo => {activeModule.title}</strong>
        <br />
        <span>Aula => {activeLesson.title} </span>
      </div>
    ) : (
      ""
    )}
  </div>
);

export default connect((state) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);
