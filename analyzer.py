import json, urllib2

from neuralNetwork import NN

def getHistoricalData(stockSymbol):
    historicalPrices = []
    
    # login to API
    urllib2.urlopen("http://api.kibot.com/?action=login&user=guest&password=guest")

    # get 10 days of data from API (business days only, could be < 10)
    url = "http://api.kibot.com/?action=history&symbol=" + stockSymbol + "&interval=daily&period=10&unadjusted=1&regularsession=1"
    apiData = urllib2.urlopen(url).read().split("\n")

    # get price for each day returned from API
    for line in apiData:
        if(len(line) > 0):
            tempLine = line.split(',')
            historicalPrices.append(float(tempLine[1]))

    return historicalPrices

def analyzeSymbol(stockSymbol):
    historicalPrices = getHistoricalData(stockSymbol)
    network = NN(ni = 2, nh = 2, no = 1)

    # train neural network with historical prices

    # return prediction
    return True

print getHistoricalData("GOOG")
