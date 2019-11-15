class LifeGame {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;

    this.map = [];

    for (let i = 0; i < this.rows; i++) {
      const row = [];

      for (let j = 0; j < this.columns; j++) {
        row.push(false);
      }

      this.map.push(row);
    }
  }


  changeMap = () => {
    const newMap = [];
    
    for (let y = 0; y < this.rows; y++) {
      const row = [];
      for (let x = 0; x < this.columns; x++) {
        let neighborsCount = 0;
        let fieldState = false;

        if (this.getField(y - 1, x)) neighborsCount++;
        if (this.getField(y - 1, x - 1)) neighborsCount++;
        if (this.getField(y - 1, x + 1)) neighborsCount++;
        if (this.getField(y, x - 1)) neighborsCount++;
        if (this.getField(y, x + 1)) neighborsCount++;
        if (this.getField(y + 1, x + 1)) neighborsCount++;
        if (this.getField(y + 1, x - 1)) neighborsCount++;
        if (this.getField(y + 1, x)) neighborsCount++;

        if (!this.getField(y, x) && neighborsCount === 3) {
          fieldState = true;
        }

        if (this.getField(y, x) && (neighborsCount === 2 || neighborsCount === 3)) {
          fieldState = true;
        }

        row.push(fieldState);
      }
      newMap.push(row);
    }

    this.map = newMap;
  }

  drawFields = (callback) => {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.columns; x++) {
        if (this.getField(y, x)) {
          callback(y, x);
        }
      }
    }
  }


  doLife = (number = 1) => {
    const freeField = [];

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (!this.getField(i, j)) {
          freeField.push({ y: i, x: j });
        }
      }
    }

    while(number-- > 0) {
      const index = Math.floor(Math.random() * freeField.length);
      const { y, x } = freeField.splice(index, 1)[0];
      this.setField(y, x, true);
    }
  }

  getField = (y, x) => {
    if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
      return false;
    }

    return this.map[y][x];
  }

  setField = (y, x, value) => {
    if (x < 0 || x >= this.columns || y < 0 || y >= this.rows) {
      return value;
    }

    this.map[y][x] = value;
  }
}