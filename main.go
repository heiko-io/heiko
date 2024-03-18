package main

import (
	"fmt"

	"github.com/schollz/peerdiscovery"
)

func main() {
	discoveries, err := peerdiscovery.Discover(peerdiscovery.Settings{ Limit: 0, Port: "5767", Payload: []byte("Hello There!") , MulticastAddress: "224.0.0.135"})
	if err != nil {
		panic(err)
	}
	
	if len(discoveries) > 0 {
		fmt.Printf("Found %d other computers\n", len(discoveries))
		for i, d := range discoveries {
			fmt.Printf("%d) '%s' with payload '%s'\n", i, d.Address, d.Payload)
		}
	} else {
		fmt.Println("No devices found :(")
	}
}
