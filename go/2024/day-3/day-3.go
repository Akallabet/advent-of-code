package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func isNumber(element string) bool {
	_, err := strconv.Atoi(element)
	if err != nil {
		return false
	}
	return true
}

func isCorrect(instr []string, element string) bool {
	var last string
	if len(instr) > 0 {
		last = instr[len(instr)-1]

	} else {
		last = ""
	}
	if last == "" && element == "m" {
		return true
	}
	if last == "m" && element == "u" {
		return true
	}
	if last == "u" && element == "l" {
		return true
	}
	if last == "l" && element == "(" {
		return true
	}
	if last == "(" || isNumber(last) {
		if isNumber(element) {
			return true
		}
	}
	if isNumber(last) && element == "," {
		return true
	}
	if last == "," || isNumber(last) {
		if isNumber(element) {
			return true
		}
	}
	if isNumber(last) && element == ")" {
		return true
	}
	return false
}

func isComplete(instr []string) bool {
	last := instr[len(instr)-1]
	if last == ")" {
		return true
	}
	return false
}

func extractNumbers(instruction string) (int, int) {
	instruction = strings.Replace(instruction, "mul(", "", 1)
	instruction = strings.Replace(instruction, ")", "", 1)
	nums := strings.Split(instruction, ",")
	left, err := strconv.Atoi(nums[0])
	if err != nil {
		panic(err)
	}

	right, err := strconv.Atoi(nums[1])
	if err != nil {
		panic(err)
	}

	return left, right
}

func part1(memory string) int {
	var instructions []string
	var instruction []string
	for _, char := range strings.Split(memory, "") {
		fmt.Println(char)
		if isCorrect(instruction, char) {
			fmt.Println("correct")
			instruction = append(instruction, char)
			if isComplete(instruction) {
				instructions = append(instructions, strings.Join(instruction, ""))
				// fmt.Println("is Complete", instruction)
				instruction = nil
			}
		} else {
			instruction = nil
		}
	}
	var result int
	for _, instruction := range instructions {
		left, right := extractNumbers(instruction)
		result += left * right
	}
	return result
}

func part2() {
}

func main() {
	dat, err := os.ReadFile("input.txt")
	// dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}
	fmt.Println(part1(string(dat)))
}
