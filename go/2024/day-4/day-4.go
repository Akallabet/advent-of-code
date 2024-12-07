package main

import (
	"fmt"
	"os"
	// "strconv"
	"strings"
)

var xmasWord = "XMAS"

func isXmasWord(word string) (bool, bool) {
	var isValid bool
	var isComplete bool

	if strings.HasPrefix(xmasWord, word) {
		isValid = true
	}
	if word == xmasWord {
		isComplete = true
	}
	return isValid, isComplete
}

func leftToRight(wordSearch [][]string, y, x int) bool {
	var word []string
	for x < len(wordSearch[y]) {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		// fmt.Println(word, isValid, isComplete)
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		x++

	}
	return false
}

func rightToLeft(wordSearch [][]string, y, x int) bool {
	var word []string
	for x >= 0 {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		// fmt.Println(word, isValid, isComplete)
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		x--

	}
	return false
}

func topToBottom(wordSearch [][]string, y, x int) bool {
	var word []string
	for y < len(wordSearch) {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		// fmt.Println(word, isValid, isComplete)
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		y++

	}
	return false
}

func bottomToTop(wordSearch [][]string, y, x int) bool {
	var word []string
	for y >= 0 {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		// fmt.Println(word, isValid, isComplete)
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		y--

	}
	return false
}

func bottomLeftToTopRight(wordSearch [][]string, y, x int) bool {
	var word []string
	for y >= 0 && x < len(wordSearch[y]) {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		y--
		x++

	}
	return false
}

func topRightToBottomLeft(wordSearch [][]string, y, x int) bool {
	var word []string
	for y < len(wordSearch) && x >= 0 {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		y++
		x--

	}
	return false
}

func bottomRightToTopLeft(wordSearch [][]string, y, x int) bool {
	var word []string
	fmt.Println()
	for y >= 0 && x >= 0 {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		y--
		x--

	}
	return false
}

func topLeftToBottomRight(wordSearch [][]string, y, x int) bool {
	var word []string
	for y < len(wordSearch) && x < len(wordSearch[y]) {
		word = append(word, wordSearch[y][x])
		isValid, isComplete := isXmasWord(strings.Join(word, ""))
		if !isValid {
			return false
		}
		if isComplete {
			return true
		}
		y++
		x++

	}
	return false
}

func part1(wordSearch [][]string) int {
	var count = 0
	// fmt.Println(wordSearch)
	for y, line := range wordSearch {
		// fmt.Println(line)
		for x, letter := range line {
			// fmt.Println(letter)
			if letter == "X" {
				// fmt.Print(y, x, " - ")
				if leftToRight(wordSearch, y, x) {
					fmt.Println("left to right")
					count++
				}
				if rightToLeft(wordSearch, y, x) {
					fmt.Println("right to left")
					count++
				}
				if topToBottom(wordSearch, y, x) {
					fmt.Println("top to bottom")
					count++
				}
				if bottomToTop(wordSearch, y, x) {
					fmt.Println("bottom to top")
					count++
				}
				if bottomLeftToTopRight(wordSearch, y, x) {
					fmt.Println("bottom left to top right")
					count++
				}
				if topRightToBottomLeft(wordSearch, y, x) {
					fmt.Println("top right to bottom left")
					count++
				}
				if bottomRightToTopLeft(wordSearch, y, x) {
					fmt.Println("bottom right to top left")
					count++
				}
				if topLeftToBottomRight(wordSearch, y, x) {
					fmt.Println("top left to bottom right")
					count++
				}
			}
			// fmt.Println(letter)
		}
	}
	return count
}

func part2(wordSearch [][]string) int {
	fmt.Println(wordSearch)
	return 0
}

func main() {
	dat, err := os.ReadFile("input.txt")
	// dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}
	var wordsSearch [][]string
	lines := strings.Split(string(dat), "\n")
	lines = lines[:len(lines)-1]
	for _, line := range lines {
		words := strings.Split(line, "")
		wordsSearch = append(wordsSearch, words)
	}
	fmt.Println(part1(wordsSearch)) //2642
	// fmt.Println(part2(string(dat)))
}
