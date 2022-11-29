from tracemalloc import start


def terverse_and_sum(list):
    sum = 0
    for i in range(len(list)):
        sum = sum + list[i]
        print(f'index {i} - {list[i]} - sumation - {sum}')

test = [1, 2, 3, 4, 5]

# terverse_and_sum(test)

def myFilter(list, cb):
    li = []
    for i in range(len(list)):
        if cb(list[i], i, list):
            li.append(list[i])
    return li

def filter(value, i, list):
    if(value % 2 == 0):
        return True
    else:
        return False

# result = myFilter(test, filter)

# print(result)

def myReduce(list, cb, init):
    acc = init
    start = 0
    # if(not init):
    #     acc = list[0]
    #     start = 1
    
    while start < len(list):
        acc = cb(acc, list[start], list)
        start = start + 1

    return acc

# def reduce(acc, cur, list):
#     acc = acc + cur
#     return acc

# result = myReduce(test, reduce, 0)

def reduce(acc, cur, list):
    acc[cur] = cur
    return acc


result = myReduce(test, reduce, {})

print(result)