import { useState, useEffect } from "react";
import { firebase } from "../firebase";

const collectedTasksExist = () => {};

export const useTasks = (selectedProject) => {
  const [taks, setTaks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "1");

    unsubscribe =
      selectedProject && !collectedTasksExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
  }, []);
};
