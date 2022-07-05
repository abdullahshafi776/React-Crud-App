import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUser, resetUser, updateUser } from "../../features/crudSlice";

export default function Editreduxcrud({ history }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const { name, age } = data;
  const onvaluechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { user, success } = useSelector((state) => state.crud);

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(data));
  };

  useEffect(() => {
    if (success) {
      dispatch(resetUser());
      history.push("/crud-app");
    } else {
      if (user.length === 0) {
        dispatch(getUser(id));
      } else {
        setData(user[0]);
      }
    }
  }, [id, dispatch, user, success, history]);

  return (
    <React.Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="text-left">
              <div
                className="back_btn"
                onClick={() => history.push("/crud-app")}
              >
                <i className="fas fa-arrow-circle-left fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="offset-lg-4 col-lg-4 offset-md-3 col-md-6 pb-5">
            <div className="text-center">
              <p className="display-4">Edit User</p>
            </div>
            <form
              className="bg-dark border shadow p-3 text-white"
              onSubmit={handlesubmit}
            >
              <div className="text-center">
                <p className="lead">Update Data</p>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputfname">School Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => onvaluechange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputlname">Class Name</label>
                <input
                  type="text"
                  name="age"
                  className="form-control"
                  value={age}
                  onChange={(e) => onvaluechange(e)}
                  required
                />
              </div>
              <div className="text-right">
                <button type="submit" className="btn">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
