-- Team: Hamza Hameed & Amber Yeasin

{-
input: unsolved sudoku board ([Int])
output: solved sudoku board ([Int]) or empty list if it is invalid
operation: calls solveMe and starts at index 0
-}
lotusSolver::[Int] -> [Int]
lotusSolver big = solveMe 0 big

{-
input: index (Int), board ([Int]), possible choice (Int)
output: new board with added value ([Int])
operation: adds the possible choice at the index specified
-}
add::Int -> [Int] -> [Int] -> [Int]
add index big poss = (take index big) ++ poss ++ (drop (index + 1) big)

{-
input: index (Int), board ([Int])
output: True if board is valid, false otherwise
operation: checks each index and makes sure there are no duplicates in the ring or either arcs
-}
checkValid::[Int] -> Bool
checkValid big
    |big == [] = False
    |(noDuplicates (getValues big [0..6])) && (noDuplicates (getValues big [7..13])) && (noDuplicates (getValues big [14..20])) && (noDuplicates (getValues big [21..27])) && (noDuplicates (getValues big [28..34])) && (noDuplicates (getValues big [35..41])) && (noDuplicates (getValues big [42..48])) && (noDuplicates (getValues big [0,7,15,22,30,37,45])) && (noDuplicates (getValues big [1,8,16,23,31,38,46])) && (noDuplicates (getValues big [2,9,17,24,32,39,47])) && (noDuplicates (getValues big [3,10,18,25,33,40,48])) && (noDuplicates (getValues big [4,11,19,26,34,41,42])) && (noDuplicates (getValues big [5,12,20,27,28,35,43])) && (noDuplicates (getValues big [6,13,14,21,29,36,44])) && (noDuplicates (getValues big [0,13,20,26,33,39,46])) && (noDuplicates (getValues big [1,7,14,27,34,40,47])) && (noDuplicates (getValues big [2,8,15,21,28,41,48])) && (noDuplicates (getValues big [3,9,16,22,29,35,42])) && (noDuplicates (getValues big [4,10,17,23,30,36,43])) && (noDuplicates (getValues big [5,11,18,24,31,37,44])) && (noDuplicates (getValues big [6,12,19,25,32,38,45])) = True
    |otherwise = False

{-
input: board ([Int]), indices of ring, arc, or arc2 ([Int])
output: values of list of indices in the board
operation: recursively gets value at each index
-}
getValues::[Int] -> [Int] -> [Int]
getValues big [] = []
getValues big indices = [(big!!(head indices))] ++ (getValues big (tail indices))

{-
input: ring, arc, or arc2 ([Int])
output: true if there are duplicates, false otherwise
operation: gets list of nums in ring, arc, arc2, if theres more than one then there are duplicates
-}
noDuplicates::[Int] -> Bool
noDuplicates vals
    |(length(elemIndices 1 vals) > 1) = False
    |(length(elemIndices 2 vals) > 1) = False
    |(length(elemIndices 3 vals) > 1) = False
    |(length(elemIndices 4 vals) > 1) = False
    |(length(elemIndices 5 vals) > 1) = False
    |(length(elemIndices 6 vals) > 1) = False
    |(length(elemIndices 7 vals) > 1) = False
    |otherwise = True

{-
input: index (Int), board ([Int])
output: solved board ([Int])
operation: recursively checks a possibility, and if its valid then adds it
-}
solveMe::Int -> [Int] -> [Int]
solveMe index big
    |(checkValid big) == False = big
    |index == 49 = big
    |(big!!index /= 0) = solveMe (index+1) big
    |(checkValid a1)= a1
    |(checkValid a2)= a2
    |(checkValid a3)= a3
    |(checkValid a4)= a4
    |(checkValid a5)= a5
    |(checkValid a6)= a6
    |(checkValid a7)= a7
    |otherwise = []
    where a1=(solveMe (index+1) (add index big [1]))::[Int]
          a2=(solveMe (index+1) (add index big [2]))::[Int]
          a3=(solveMe (index+1) (add index big [3]))::[Int]
          a4=(solveMe (index+1) (add index big [4]))::[Int]
          a5=(solveMe (index+1) (add index big [5]))::[Int]
          a6=(solveMe (index+1) (add index big [6]))::[Int]
          a7=(solveMe (index+1) (add index big [7]))::[Int]
