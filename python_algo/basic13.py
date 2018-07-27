arr = [1,-5,9,500,4,-2,0]

# Write a function that will swap the first and last values of any given array. 
# The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

def swap(arr):
    temp = (arr[0])
    arr[0] = arr[len(arr)-1]
    arr[len(arr)-1] = temp

    return arr

print (swap(arr))

# Write a function that takes an array of numbers and replaces any negative values within the 
# array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

def stringInsert(arr):

    for i in range (0, len(arr)):
        if arr[i] < 0:
            arr[i] = "Dojo"
    
    return arr

print (stringInsert(arr))