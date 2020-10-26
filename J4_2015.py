msgs = []
friends = []
inp = int(input("num: "))
num = range(inp)
result = []

for x in num:
    y = input()
    z = y.split()
    msgs.append(z) # puts messages in a list
    if z[0] != "W":
        friends.append(z[1]) # puts friend numbers in a list

for f in friends: # makes sure there's no repetition in friends list
    c = friends.count(f)
    if c > 1:
        friends.remove(f)

for f in friends:
    time = 0
    for msg in msgs:
        this_friend = []
        if msg[0] == "R" and msg[1] == f:
            start = msgs.index(msg) + 1
        if msg[0] == "S" and msg[1] == f:
            end = msgs.index(msg)
            for msg in msgs[start:end]:
                this_friend.append(msg)
            for txt in this_friend:
                ind = this_friend.index(txt) - 1
                if txt[0] == "W": # add the wait time
                    time += int(txt[1])
                elif txt[0] == "R" or "S" and this_friend.index(txt) == 0:
                    time += 1
                elif txt[0] == "R" or "S" and this_friend[ind][0] != "W": # if R or S isn't subsequent to a wait time, add 1
                    time += 1
            res = f,time
            result.append(res)
    if not end: # if there's no end (sent response), then time is -1
        time = -1
        res = f,time
        result.append(res)

print(result)


    