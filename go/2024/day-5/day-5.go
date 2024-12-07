package main

import (
	"fmt"
	"os"
	"slices"
	"strconv"

	// "strconv"
	"strings"
)

func has(slice []int, num int) bool {
	for _, n := range slice {
		if n == num {
			return true
		}
	}
	return false
}

func part1(rules map[int][]int, updates [][]int) int {
	total := 0
	compare := func(a, b int) int {
		if has(rules[a], b) {
			return -1
		}
		return 0
	}
	for _, update := range updates {
		if slices.IsSortedFunc(update, compare) {
			slices.SortFunc(update, compare)
			n := update[len(update)/2]
			total += n
		}
	}
	return total
}

func part2() {
}

func main() {
	dat, err := os.ReadFile("input.txt")
	// dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}
	lines := strings.Split(string(dat), "\n\n")

	var rules = map[int][]int{}
	var updates [][]int

	for _, line := range strings.Split(strings.TrimSpace(lines[0]), "\n") {
		s := strings.Split(line, "|")
		key, _ := strconv.Atoi(s[0])
		value, _ := strconv.Atoi(s[1])
		rule, _ := rules[key]
		if rule == nil {
			rules[key] = []int{value}
		} else {
			rules[key] = append(rule, value)
		}

	}

	for _, line := range strings.Split(strings.TrimSpace(lines[1]), "\n") {
		var update []int
		for _, str := range strings.Split(line, ",") {
			num, err := strconv.Atoi(str)
			if err != nil {
				panic(err)
			}
			update = append(update, num)
		}
		updates = append(updates, update)

	}

	fmt.Println(part1(rules, updates)) //4462
}
