package main

import (
	"fmt"
	"os"
	"strings"
)

type Pos struct {
	y int
	x int
}

type Loop struct {
	topLeft     Pos
	topRight    Pos
	bottomRight Pos
	bottomLeft  Pos
}

func has(slice []Pos, pos Pos) bool {
	for _, n := range slice {
		if n.y == pos.y && n.x == pos.x {
			return true
		}
	}
	return false
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

func calcPath(grid [][]string) ([][]string, []Pos) {
	var currentPos = startingPosition(grid)
	var exited = false
	var obstacles []Pos

	for !exited {
		var move = guardMoves[grid[currentPos.y][currentPos.x]]
		var nextPos = move(currentPos)
		if nextPos.y < 0 || nextPos.y >= len(grid) || nextPos.x < 0 || nextPos.x >= len(grid[0]) {
			fmt.Println("exiting")
			grid[currentPos.y][currentPos.x] = "X"
			exited = true
		} else if grid[nextPos.y][nextPos.x] == "#" {
			grid[currentPos.y][currentPos.x] = changeDirection(grid[currentPos.y][currentPos.x])
			if !has(obstacles, nextPos) {
				obstacles = append(obstacles, nextPos)
			}
		} else if grid[nextPos.y][nextPos.x] == "." || grid[nextPos.y][nextPos.x] == "X" {
			grid[nextPos.y][nextPos.x] = grid[currentPos.y][currentPos.x]
			grid[currentPos.y][currentPos.x] = "X"
			currentPos = nextPos
		}
	}
	return grid, obstacles
}

func part1(path [][]string) int {
	var visited = 0

	for _, row := range path {
		for _, char := range row {
			if char == "X" {
				visited++
			}
		}
	}
	return visited
}

func part2(path [][]string, obstacles []Pos) int {
	fmt.Println(len((path)))

	fmt.Println(obstacles)
	for y := range path {
		for x := range path[y] {
			if has(obstacles, Pos{y: y, x: x}) {
				fmt.Println(y, x)
			}
		}

	}
	return 0
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
	path, obstacles := calcPath(grid)

	fmt.Println(part1(path)) //5444
	fmt.Println(part2(path, obstacles))
	// fmt.Println(grid)
}
