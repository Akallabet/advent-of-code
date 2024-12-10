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

var directions = []string{"^", "v", "<", ">"}

var guardMoves = map[string]func(Pos) Pos{
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

func changeDirection(direction string) string {
	if direction == "^" {
		return ">"
	} else if direction == ">" {
		return "v"
	} else if direction == "v" {
		return "<"
	} else {
		return "^"
	}
}

func startingPosition(grid [][]string) Pos {
	var pos Pos
	for y, row := range grid {
		for x, char := range row {
			for _, v := range directions {
				if char == v {
					return Pos{y: y, x: x}
				}
			}
		}
	}
	return pos
}

func part1(grid [][]string) int {
	var currentPos = startingPosition(grid)
	var exited = false
	var visited = 0

	for !exited {
		// fmt.Println("current", grid[currentPos.y][currentPos.x])
		var move = guardMoves[grid[currentPos.y][currentPos.x]]
		var nextPos = move(currentPos)
		// fmt.Println("next pos", nextPos, len(grid))
		if nextPos.y < 0 || nextPos.y >= len(grid) || nextPos.x < 0 || nextPos.x >= len(grid[0]) {
			fmt.Println("exiting")
			grid[currentPos.y][currentPos.x] = "X"
			visited++
			exited = true
		} else if grid[nextPos.y][nextPos.x] == "#" {
			// var nextDirection = changeDirection(grid[currentPos.y][currentPos.x])
			// fmt.Print("About to change direction from ", grid[currentPos.y][currentPos.x], " to ", nextDirection, "\n")
			grid[currentPos.y][currentPos.x] = changeDirection(grid[currentPos.y][currentPos.x])
		} else if grid[nextPos.y][nextPos.x] == "." || grid[nextPos.y][nextPos.x] == "X" {
			if grid[nextPos.y][nextPos.x] != "X" {
				visited++
			}
			grid[nextPos.y][nextPos.x] = grid[currentPos.y][currentPos.x]
			grid[currentPos.y][currentPos.x] = "X"
			currentPos = nextPos
		}
	}
	return visited
}

func main() {
	dat, err := os.ReadFile("input.txt")
	// dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}

	var grid [][]string
	for _, line := range strings.Split(string(dat), "\n") {
		if len(line) > 0 {

			var row []string
			for _, char := range strings.Split(line, "") {
				row = append(row, string(char))
			}
			grid = append(grid, row)
		}
	}

	fmt.Println(part1(grid)) //5444
	// fmt.Println(grid)
}
