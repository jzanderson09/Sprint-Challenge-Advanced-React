const help = require('./App');

describe('Array of players', () => {
    const expected = [];
    const actual = help.players;
    expect(actual).toBe(expected);
}); 