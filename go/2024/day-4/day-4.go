package main

import (
	"fmt"
	"os"
	// "strconv"
	"strings"
)

func part1(wordSearch [][]string) int {

	fmt.Println(wordSearch)
	return 0

}

func part2(wordSearch [][]string) int {

	fmt.Println(wordSearch)
	return 0
}

func main() {
	// dat, err := os.ReadFile("input.txt")
	dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}
	var wordsSearch [][]string
	lines := strings.Split(string(dat), "\n")
	lines = lines[:len(lines)-1]
	for _, line := range lines {
		words := strings.Split(line, " ")
		wordsSearch = append(wordsSearch, words)
	}

	fmt.Println(part1(wordsSearch))
	// fmt.Println(part2(string(dat)))
}
