import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map((module) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson) => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                {/* mapDispatchToProps */}
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CourseActions, dispatch); // utilizado para não recriar um função com mesmo nome e parametros

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
