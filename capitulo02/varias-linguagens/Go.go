package main
import (
	"regexp"
	"fmt"
	"bytes"
)

func main(){
	// inicializando a variável
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	// _ é a variável que armazena o erro
	regex9, _ := regexp.Compile("9")
	fmt.Println(regex9.MatchString(texto))
	fmt.Println(regex9.FindString(texto))
	fmt.Println(regex9.FindStringIndex(texto))

	regexLetras, _ := regexp.Compile("[a-f]")
	fmt.Println(regexLetras.FindAllString(texto, 20))
	fmt.Println(regexLetras.ReplaceAllString(texto, "Achei"))

	resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)
	fmt.Println(string(resultado))
}