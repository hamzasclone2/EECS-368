decodeText::String -> String
decodeText str = decodeCipher (last (splitMessage str)) (getKey (splitMessage str))

--finds index that the M is at
findIdx::String -> Maybe Int
findIdx str = elemIndex 'M' (fromMorseCode str)

--converts from Maybe Int to Int
caseIdx::Maybe Int -> Int
caseIdx mx = case mx of
		Just x -> x
		Nothing -> 0

--splits string at the M, getting rid of the M in the process
splitMessage::String -> [String]
splitMessage str = [splitTake str, splitDrop str]

--the above got too long so i split it up (pun intended) into two funcs
splitTake::String -> String
splitTake str = fromMorseCode (take (caseIdx(findIdx str)) (fromMorseCode str))

splitDrop::String -> String
splitDrop str = fromMorseCode (drop ((caseIdx(findIdx str)) + 1) (fromMorseCode str))

--converts string to int giving the key
getKey::[String] -> Int
getKey xs = read (head xs)::Int

-------------------------------------------------------

fromMorseCode:: String -> String
fromMorseCode str = concat (recurse (splitList str))

splitList:: String -> [String]
splitList string = splitOn " " string

recurse:: [String] -> [String]
recurse [] = []
recurse xs = convert (head xs) : (recurse (tail xs))

convert:: String -> String
convert ".-"    = "A"
convert "-..."  = "B"
convert "-.-."  = "C"
convert "-.."   = "D"
convert "."     = "E"
convert "..-."  = "F"
convert "--."   = "G"
convert "...."  = "H"
convert ".."    = "I"
convert ".---"  = "J"
convert "-.-"   = "K"
convert ".-.."  = "L"
convert "--"    = "M"
convert "-."    = "N"
convert "---"   = "O"
convert ".--."  = "P"
convert "--.-"  = "Q"
convert ".-."   = "R"
convert "..."   = "S"
convert "-"     = "T"
convert "..-"   = "U"
convert "...-"  = "V"
convert ".--"   = "W"
convert "-..-"  = "X"
convert "-.--"  = "Y"
convert "--.."  = "Z"
convert ".----" = "1"
convert "..---" = "2"
convert "...--" = "3"
convert "....-" = "4"
convert "....." = "5"
convert "-...." = "6"
convert "--..." = "7"
convert "---.." = "8"
convert "----." = "9"
convert "-----" = "0"
convert str     = str

-------------------------------------------------------------

decodeCipher::String -> Int -> String
decodeCipher str key = toStr (shift (toNums str) key)

toStr::[Int] -> String
toStr nums = map intToChar nums

toNums::[Char] -> [Int]
toNums str = map charToInt str

shift::[Int] -> Int -> [Int]
shift nums key = map (+ (key `mod` 36)) nums

charToInt::Char -> Int
charToInt '1' = 0
charToInt '2' = 1
charToInt '3' = 2
charToInt '4' = 3
charToInt '5' = 4
charToInt '6' = 5
charToInt '7' = 6
charToInt '8' = 7
charToInt '9' = 8
charToInt '0' = 9
charToInt 'A' = 10
charToInt 'B' = 11
charToInt 'C' = 12
charToInt 'D' = 13
charToInt 'E' = 14
charToInt 'F' = 15
charToInt 'G' = 16
charToInt 'H' = 17
charToInt 'I' = 18
charToInt 'J' = 19
charToInt 'K' = 20
charToInt 'L' = 21
charToInt 'M' = 22
charToInt 'N' = 23
charToInt 'O' = 24
charToInt 'P' = 25
charToInt 'Q' = 26
charToInt 'R' = 27
charToInt 'S' = 28
charToInt 'T' = 29
charToInt 'U' = 30
charToInt 'V' = 31
charToInt 'W' = 32
charToInt 'X' = 33
charToInt 'Y' = 34
charToInt 'Z' = 35
charToInt char = 36

intToChar::Int -> Char
intToChar 0 = '1'
intToChar 1 = '2'
intToChar 2 = '3'
intToChar 3 = '4'
intToChar 4 = '5'
intToChar 5 = '6'
intToChar 6 = '7'
intToChar 7 = '8'
intToChar 8 = '9'
intToChar 9 = '0'
intToChar 10 = 'A'
intToChar 11 = 'B'
intToChar 12 = 'C'
intToChar 13 = 'D'
intToChar 14 = 'E'
intToChar 15 = 'F'
intToChar 16 = 'G'
intToChar 17 = 'H'
intToChar 18 = 'I'
intToChar 19 = 'J'
intToChar 20 = 'K'
intToChar 21 = 'L'
intToChar 22 = 'M'
intToChar 23 = 'N'
intToChar 24 = 'O'
intToChar 25 = 'P'
intToChar 26 = 'Q'
intToChar 27 = 'R'
intToChar 28 = 'S'
intToChar 29 = 'T'
intToChar 30 = 'U'
intToChar 31 = 'V'
intToChar 32 = 'W'
intToChar 33 = 'X'
intToChar 34 = 'Y'
intToChar 35 = 'Z'
intToChar num = intToChar (num - 36)
