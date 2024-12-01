package main

import (
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func part1(leftNumbers []int, rightNumbers []int) {

	sort.Slice(leftNumbers, func(i, j int) bool {
		return leftNumbers[i] < leftNumbers[j]
	})
	sort.Slice(rightNumbers, func(i, j int) bool {
		return rightNumbers[i] < rightNumbers[j]
	})

	var distances []int
	for i := 0; i < len(leftNumbers); i++ {
		distances = append(distances, abs(rightNumbers[i]-leftNumbers[i]))
	}

	var totalDistance int
	for _, distance := range distances {
		totalDistance += distance
	}
	fmt.Println(totalDistance)
}

func part2(leftNumbers []int, rightNumbers []int) {
	var rightNumbersMap = make(map[int]int)

	for _, rightNumber := range rightNumbers {
		if _, ok := rightNumbersMap[rightNumber]; !ok {
			rightNumbersMap[rightNumber] = 0
		}
		rightNumbersMap[rightNumber]++

	}
	var similarityScore int
	for _, num := range leftNumbers {
		if _, ok := rightNumbersMap[num]; ok {
			var similarity = num * rightNumbersMap[num]
			similarityScore += similarity
		}
	}

	fmt.Println("Part 2", similarityScore)
}

func main() {
	dat, err := os.ReadFile("input.txt")
	if err != nil {
		panic(err)
	}
	lines := strings.Split(string(dat), "\n")
	lines = lines[:len(lines)-1]

	var leftNumbers []int
	var rightNumbers []int

	for _, line := range lines {
		numbers := strings.Split(line, " ")
		for i := len(numbers) - 1; i >= 0; i-- {
			if numbers[i] == "" {
				numbers = append(numbers[:i], numbers[i+1:]...)
			}
		}
		leftNumber, _ := strconv.Atoi(numbers[0])
		rightNumber, _ := strconv.Atoi(numbers[1])
		leftNumbers = append(leftNumbers, leftNumber)
		rightNumbers = append(rightNumbers, rightNumber)
	}

	part1(leftNumbers, rightNumbers)
	part2(leftNumbers, rightNumbers)
}
