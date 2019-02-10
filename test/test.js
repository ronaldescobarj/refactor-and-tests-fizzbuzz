var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');

import { fizzbuzz } from '../fizzbuzz';

const sequenceTo100 = "12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz1617Fizz19BuzzFizz2223FizzBuzz26Fizz2829FizzBuzz3132Fizz34BuzzFizz3738FizzBuzz41Fizz4344FizzBuzz4647Fizz49BuzzFizz5253FizzBuzz56Fizz5859FizzBuzz6162Fizz64BuzzFizz6768FizzBuzz71Fizz7374FizzBuzz7677Fizz79BuzzFizz8283FizzBuzz86Fizz8889FizzBuzz9192Fizz94BuzzFizz9798FizzBuzz"
const sequenceTo10 = "12Fizz4BuzzFizz78FizzBuzz"


describe('Testear secuencia de fizzbuzz', function() {
    it('deberia devolver la secuencia completa hasta el 100 cuando el limite es 100', function() {
        expect(fizzbuzz(100)).equal(sequenceTo100);
    })
    it('deberia devolver la secuencia completa hasta el 10 cuando el limite es 10', function () {
        expect(fizzbuzz(10)).equal(sequenceTo10);
    })
    it('deberia devolver cadena vacia cuando el limite es 0', function () {
        expect(fizzbuzz(0)).equal("");
    })
    it('deberia devolver cadena vacia cuando el limite es menor a 0', function () {
        expect(fizzbuzz(-5)).equal("");
    })
    it('deberia devolver 1 cuando el limite es 1', function () {
        expect(fizzbuzz(1)).equal("1");
    })
})