import math, random, string

random.seed(0)

## ================================================================

# calculate a random number a <= rand < b
def rand(a, b):
    return (b-a)*random.random() + a

def makeMatrix(I, J, fill = 0.0):
    m = []
    for i in range(I):
        m.append([fill]*J)
    return m

def sigmoid(x):
    # tanh is a little nicer than the standard 1/(1+e^-x)
    return math.tanh(x)

# derivative of our sigmoid function, in terms of the output (i.e. y)
def dsigmoid(y):
    return 1.0 - y**2

## ================================================================

class NeuralNetwork:
    def __init__(self, inputNodes, hiddenNodes, outputNodes):
        # number of input, hidden, and output nodes
        self.inputNodes = inputNodes + 1 # +1 for bias node
        self.hiddenNodes = hiddenNodes
        self.outputNodes = outputNodes

        # activations for nodes
        self.inputActivation = [1.0]*self.inputNodes
        self.hiddenActivation = [1.0]*self.hiddenNodes
        self.outputActivation = [1.0]*self.outputNodes
        
        # create weights
        self.inputWeight = makeMatrix(self.inputNodes, self.hiddenNodes)
        self.outputWeight = makeMatrix(self.hiddenNodes, self.outputNodes)
        # set them to random vaules
        for i in range(self.inputNodes):
            for j in range(self.hiddenNodes):
                self.inputWeight[i][j] = rand(-0.2, 0.2)
        for j in range(self.hiddenNodes):
            for k in range(self.outputNodes):
                self.outputWeight[j][k] = rand(-2.0, 2.0)

        # last change in weights for momentum   
        self.ci = makeMatrix(self.inputNodes, self.hiddenNodes)
        self.co = makeMatrix(self.hiddenNodes, self.outputNodes)

    def update(self, inputs):
        if len(inputs) != self.inputNodes-1:
            raise ValueError('wrong number of inputs')

        # input activations
        for i in range(self.inputNodes-1):
            self.inputActivation[i] = inputs[i]

        # hidden activations
        for j in range(self.hiddenNodes):
            sum = 0.0
            for i in range(self.inputNodes):
                sum = sum + self.inputActivation[i] * self.inputWeight[i][j]
            self.hiddenActivation[j] = sigmoid(sum)

        # output activations
        for k in range(self.outputNodes):
            sum = 0.0
            for j in range(self.hiddenNodes):
                sum = sum + self.hiddenActivation[j] * self.outputWeight[j][k]
            self.outputActivation[k] = sigmoid(sum)

        return self.outputActivation[:]


    def backPropagate(self, targets, N, M):
        if len(targets) != self.outputNodes:
            raise ValueError('wrong number of target values')

        # calculate error terms for output
        output_deltas = [0.0] * self.outputNodes
        for k in range(self.outputNodes):
            error = targets[k]-self.outputActivation[k]
            output_deltas[k] = dsigmoid(self.outputActivation[k]) * error

        # calculate error terms for hidden
        hidden_deltas = [0.0] * self.hiddenNodes
        for j in range(self.hiddenNodes):
            error = 0.0
            for k in range(self.outputNodes):
                error = error + output_deltas[k]*self.outputWeight[j][k]
            hidden_deltas[j] = dsigmoid(self.hiddenActivation[j]) * error

        # update output weights
        for j in range(self.hiddenNodes):
            for k in range(self.outputNodes):
                change = output_deltas[k]*self.hiddenActivation[j]
                self.outputWeight[j][k] = self.outputWeight[j][k] + N*change + M*self.co[j][k]
                self.co[j][k] = change

        # update input weights
        for i in range(self.inputNodes):
            for j in range(self.hiddenNodes):
                change = hidden_deltas[j]*self.inputActivation[i]
                self.inputWeight[i][j] = self.inputWeight[i][j] + N*change + M*self.ci[i][j]
                self.ci[i][j] = change

        # calculate error
        error = 0.0
        for k in range(len(targets)):
            error = error + 0.5*(targets[k] - self.outputActivation[k])**2
            
        return error


    def test(self, inputNodes):
        print(inputNodes, '->', self.update(inputNodes))
        return self.update(inputNodes)[0]

    def weights(self):
        print('Input weights:')
        for i in range(self.inputNodes):
            print(self.inputWeight[i])
        print()
        print('Output weights:')
        for j in range(self.hiddenNodes):
            print(self.outputWeight[j])

    def train(self, patterns, iterations = 1000, N = 0.5, M = 0.1):
        # N: learning rate, M: momentum factor
        for i in range(iterations):
            error = 0.0
            for p in patterns:
                inputs = p[0]
                targets = p[1]
                self.update(inputs)
                error = error + self.backPropagate(targets, N, M)
            if i % 100 == 0:
                print('error %-.5f' % error)
