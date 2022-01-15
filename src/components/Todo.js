import React from "react";


export default function Todo() {
    return (
      <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" data-testid="cbCheckUncheck"    defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            Eat
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn" data-testid = "edit-button">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" className="btn btn__danger" data-testid = "delete-button">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li>
    );
  }
  