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

func isInstruction(instr []string, element string) (bool, bool) {
	var last string

	if len(instr) > 0 {
		last = instr[len(instr)-1]

	} else {
		last = ""
	}
	if last == "" && element == "m" {
		return true, false
	}
	if last == "m" && element == "u" {
		return true, false
	}
	if last == "u" && element == "l" {
		return true, false
	}
	if last == "l" && element == "(" {
		return true, false
	}
	if last == "(" || isNumber(last) {
		if isNumber(element) {
			return true, false
		}
	}
	if isNumber(last) && element == "," {
		return true, false
	}
	if last == "," || isNumber(last) {
		if isNumber(element) {
			return true, false
		}
	}
	if isNumber(last) && element == ")" {
		return true, true
	}
	return false, false
}

func isEnabling(instr []string, element string) (bool, bool) {
	var last string

	if len(instr) > 0 {
		last = instr[len(instr)-1]

	} else {
		last = ""
	}
	if last == "" && element == "d" {
		return true, false
	}
	if last == "d" && element == "o" {
		return true, false
	}
	if last == "o" && element == "(" {
		return true, false
	}
	if last == "(" && element == ")" {
		return true, true
	}
	return false, false
}

func isDisabling(instr []string, element string) (bool, bool) {
	var last string

	if len(instr) > 0 {
		last = instr[len(instr)-1]

	} else {
		last = ""
	}
	if last == "" && element == "d" {
		return true, false
	}
	if last == "d" && element == "o" {
		return true, false
	}
	if last == "o" && element == "n" {
		return true, false
	}
	if last == "n" && element == "'" {
		return true, false
	}
	if last == "'" && element == "t" {
		return true, false
	}
	if last == "t" && element == "(" {
		return true, false
	}
	if last == "(" && element == ")" {
		return true, true
	}
	return false, false
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
		isValid, isComplete := isInstruction(instruction, char)
		if isValid {
			instruction = append(instruction, char)
			if isComplete {
				instructions = append(instructions, strings.Join(instruction, ""))
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

func part2(memory string) int {
	var instructions []string
	var instruction []string
	var enablingInstruction []string
	var disablingInstruction []string
	var enabled = true

	for _, char := range strings.Split(memory, "") {
		isValidInstruction, isCompleteInstruction := isInstruction(instruction, char)
		if isValidInstruction {
			instruction = append(instruction, char)
			if isCompleteInstruction && enabled {
				instructions = append(instructions, strings.Join(instruction, ""))
				instruction = nil
			}
		} else {
			instruction = nil
		}
		isValidEnabling, isCompleteEnabling := isEnabling(enablingInstruction, char)
		if isValidEnabling {
			enablingInstruction = append(enablingInstruction, char)
			if isCompleteEnabling {
				enabled = true
				enablingInstruction = nil
			}
		} else {
			enablingInstruction = nil
		}
		isValidDisabling, isCompleteDisabling := isDisabling(disablingInstruction, char)
		if isValidDisabling {
			disablingInstruction = append(disablingInstruction, char)
			if isCompleteDisabling {
				enabled = false
				disablingInstruction = nil
			}
		} else {
			disablingInstruction = nil
		}
	}
	var result int
	for _, instruction := range instructions {
		left, right := extractNumbers(instruction)
		result += left * right
	}
	return result
}

func main() {
	dat, err := os.ReadFile("input.txt")
	// dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}
	fmt.Println(part1(string(dat)))
	fmt.Println(part2(string(dat)))
}
