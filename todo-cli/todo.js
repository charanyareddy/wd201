
const todoList = () => {
  const all = []; 

  const formattedDate = (d) => {
    const datesCopy = new Date(d);
    return datesCopy.toISOString().split("T")[0];
  };

  const todaysDate = new Date(); 
  const today = formattedDate(todaysDate);

  const add = (todoItem) => {
    all.push(todoItem);
  };

  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => !item.completed && item.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((item) => !item.completed && item.dueDate > today);
  };

  const toDisplayableList = (list) => {
    let displayableList = " ";

    list.forEach((item) => {
      const checkbox = item.completed ? "[x]" : "[ ]";
      const date = item.dueDate === today ? "" : ` ${item.dueDate}`;
      displayableList += `${checkbox} ${item.title}${date}\n`;
    });

    return displayableList.trim();
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
