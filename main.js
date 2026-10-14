grid = document.getElementsByClassName("grid-container")[0];

SMILEY = [16, 38, 32, 38, 16];
BLANK = [0,0,0,0,0];
COL1 = [127, 0,0,0,0];
COL2 = [0,127,0,0,0];
COL3 = [0,0,127,0,0];
COL4 = [0,0,0,127,0];
COL5 = [0,0,0,0,127];

programs = [
  [SMILEY, BLANK],
  [COL1, COL2, COL3, COL4, COL5],
  [[4,8,16,32,64],[8,16,32,64,1],[16,32,64,1,2],[32,64,1,2,4],[64,1,2,4,8],[1,2,4,8,16],[2,4,8,16,32]],
  [
    [0b1110000, 0b1010001, 0b0000011, 0b1000001, 0b1100000],
    [0b1110000, 0b1010010, 0b0000110, 0b1000010, 0b1100000],
    [0b1110000, 0b1010000, 0b0001110, 0b1000100, 0b1100000],
    [0b1110000, 0b1010000, 0b0011100, 0b1001000, 0b1100000],
    [0b1110000, 0b1010000, 0b0111000, 0b1010000, 0b1100000],
    [0b1110000, 0b1010000, 0b1110000, 0b1100000, 0b1100000],
    [0b1110000, 0b1110000, 0b1100000, 0b1100000, 0b1100000],
    [0b10000, 0b10000, 0b00000, 0b00000, 0b00000],
    [0b1110000, 0b1110000, 0b1100000, 0b1100000, 0b1100000],
    [0b10000, 0b10000, 0b00000, 0b00000, 0b00000],
    [0b1110000, 0b1110000, 0b1100000, 0b1100000, 0b1100000],
    [0b1000000, 0b1000000, 0b00000, 0b00000, 0b00000],
    [0b1000000, 0b1000000, 0b00000, 0b00000, 0b00000],
    [0b1000000, 0b1000000, 0b00000, 0b00000, 0b00000],
  ],
];

current_program = 0;
current_frame = 0;

const columns = programs[current_program][current_frame];
grid.textContent = '';
for (let i = 0; i < 5; i++) {
    column = document.createElement('div');
    column.classList.add('grid-column');
    for (let j = 0; j < 7; j++) {
        elem = document.createElement('div');
        elem.classList.add('led');
        elem.classList.add((columns[i] >> j) & 1 ? 'led-on' : 'led-off');
        column.appendChild(elem);
    }
    grid.appendChild(column);
}

setInterval(() => {current_frame++; current_frame %= programs[current_program].length; update();}, 250);
setInterval(() => {current_program++; current_program %= programs.length; current_frame = -1;}, 10000);

const update = () => {
  let columns = programs[current_program][current_frame];
  let i = 0;
  for (let column of grid.children) {
    let j = 0;
    for (let led of column.children) {
      led.classList.remove('led-on'); 
      led.classList.remove('led-off');
      led.classList.add((columns[i] >> j) & 1 ? 'led-on' : 'led-off');
      j++;
    }
    i++;
  }
}