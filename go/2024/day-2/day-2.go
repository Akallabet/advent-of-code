package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func isGradualChange(a int, b int) bool {
	return abs(a-b) <= 3
}

func isReportSafe(report []int) bool {
	currentLevel := report[0]
	isIncreasing := currentLevel < report[1]
	isDecreasing := currentLevel > report[1]

	if !isIncreasing && !isDecreasing {
		return false
	}

	for _, level := range report[1:] {
		if isIncreasing && !(currentLevel < level) {
			return false
		}
		if isDecreasing && !(currentLevel > level) {
			return false
		}
		if !isGradualChange(currentLevel, level) {
			return false
		}
		currentLevel = level
	}
	return true
}

func part1(reports [][]int) {
	var safeReports int
	for _, report := range reports {
		if isReportSafe(report) {
			safeReports++
		}
	}
	fmt.Println(safeReports)
}

func reportsWithSingleLevelRemoved(report []int) [][]int {
	var reports [][]int
	for i := 0; i < len(report); i++ {
		newReport := []int{}
		// fmt.Println(report, i)
		left := append([]int{}, report[:i]...)
		newReport = append(left, report[i+1:]...)
		// fmt.Println(newReport)
		reports = append(reports, newReport)
	}
	return reports
}

func isAtLeastOneReportSafe(reports [][]int) bool {
	// fmt.Print("Try removing a level: ")
	for _, report := range reports {
		// fmt.Print(report)
		if isReportSafe(report) {
			// fmt.Println(" Safe")
			return true
		}
	}
	// fmt.Println(" Still Unsafe")
	return false
}

func part2(reports [][]int) {
	var safeReports int
	for _, report := range reports {
		fmt.Print(report)
		if isReportSafe(report) {
			safeReports++
			fmt.Println(" Safe")
		} else {
			fmt.Println(" Unsafe")
			if isAtLeastOneReportSafe(reportsWithSingleLevelRemoved(report)) {
				safeReports++
			}
		}
	}
	fmt.Println(safeReports)
}

func main() {
	dat, err := os.ReadFile("input.txt")
	// dat, err := os.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}
	var reports [][]int
	lines := strings.Split(string(dat), "\n")
	lines = lines[:len(lines)-1]

	for _, line := range lines {
		numStrings := strings.Fields(line)
		var report []int
		for _, numString := range numStrings {
			n, err := strconv.Atoi(numString)
			if err != nil {
				panic(err)
			}
			report = append(report, n)
		}
		reports = append(reports, report)
	}

	// part1(reports)
	part2(reports)

}
