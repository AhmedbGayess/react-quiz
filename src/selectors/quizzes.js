export default (quizzes, { text, sortBy }) => {
    return quizzes.filter((post) => post.title.toLowerCase().includes(text.toLowerCase()))
        .sort((a, b) => {
            if (sortBy === "date") {
                return a.createdAt < b.createdAt ? 1 : -1;
            } else if (sortBy === "title") {
                return a.title > b.title ? 1 : -1;
            }
        });
};