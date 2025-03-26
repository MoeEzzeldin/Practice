let games = [
    { id: "1", title: "Game One", platform: ["PC", "Console"] },
    { id: "2", title: "Game Two", platform: ["Console", "Mobile"] },
    { id: "3", title: "Game Three", platform: ["Mobile", "PC"] },
    { id: "4", title: "Game Four", platform: ["PC", "Console"] },
    { id: "5", title: "Game Five", platform: ["Console", "Mobile"] },
    { id: "6", title: "Game Six", platform: ["Mobile", "PC"] }
];

let authors = [
    { id: "1", name: "Author One", verified: true },
    { id: "2", name: "Author Two", verified: false },
    { id: "3", name: "Author Three", verified: true },
    { id: "4", name: "Author Four", verified: false },
    { id: "5", name: "Author Five", verified: true },
    { id: "6", name: "Author Six", verified: false }
];

let reviews = [
    { id: "1", rating: 5, content: "Great game!", author_id: "1", game_id: "1" },
    { id: "2", rating: 4, content: "Good game.", author_id: "2", game_id: "2" },
    { id: "3", rating: 3, content: "Average game.", author_id: "3", game_id: "3" },
    { id: "4", rating: 2, content: "Not bad.", author_id: "4", game_id: "4" },
    { id: "5", rating: 1, content: "Terrible game.", author_id: "5", game_id: "5" },
    { id: "6", rating: 5, content: "Excellent game!", author_id: "6", game_id: "6" }
];
export default {
    games,
    authors,
    reviews
};