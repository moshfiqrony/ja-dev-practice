import React from "react";

const ObjectSorting = () => {
  const empty_state = {
    completed: true,
    sections: {
      coworker: true,
      skills: true,
      profile: true,
      response: false,
      request: false
    }
  };

  const sections = empty_state.sections;

  const handlesort = () => {
    let sortedData = [];

    for (const section in sections) {
      sortedData.push([sections[section], section]);
    }
    console.log(sortedData.sort((a, b) => a - b));
    return sortedData;
  };

  return handlesort();
};

export default ObjectSorting;
