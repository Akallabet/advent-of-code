package main

import (
	"fmt"
	"os"
	"strings"
)

// func has(slice []string, num string) bool {
// 	for _, n := range slice {
// 		if n == num {
// 			return true
// 		}
// 	}
// 	return false
// }

type Pos struct {
	y int
	x int
}

var positions = map[string]func(Pos) Pos{
	"^": func(pos Pos) Pos {
		return Pos{y: pos.y - 1, x: pos.x}
	},
	"v": func(pos Pos) Pos {
		return Pos{y: pos.y + 1, x: pos.x}
	},
	"<": func(pos Pos) Pos {
		return Pos{y: pos.y, x: pos.x - 1}
	},
	">": func(pos Pos) Pos {
		return Pos{y: pos.y, x: pos.x + 1}
	},
}

func startingPosition(grid [][]string) Pos {
	var pos Pos
	for y, row := range grid {
		for x, char := range row {
			for k := range positions {
				if char == k {
					pos = positions[k](Pos{y, x})
				}
			}
		}
	}
	return pos
}

func part1(grid [][]string) int {
	var guardPos = startingPosition(grid)
	var guardDirection = grid[guardPos.y][guardPos.x]
	var exited = false

	for !exited {
		var move = positions[guardDirection]
		var nextPos = move(guardPos)
		if grid[nextPos.y][nextPos.x] == "#" {
			return 1
		}
		// if grid[y][x] == "X" {
		// 	exited = true
		// }
	}
	return 0
}

func main() {
	// dat, err := os.ReadFile("input.txt")
	dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}

	var grid [][]string
	for _, line := range strings.Split(string(dat), "\n") {
		var row []string
		for _, char := range strings.Split(line, "") {
			row = append(row, string(char))
		}
		grid = append(grid, row)
	}

	fmt.Println(part1(grid))
}
