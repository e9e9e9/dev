# 필요한 모듈 임포트 
import numpy as np
import os
import tensorflow as tf
import tensorflow.keras

from tensorflow.keras.datasets import cifar10
from tensorflow.keras.models  import Sequential
from tensorflow.keras.layers import Dense, Dropout, Activation, Flatten
from tensorflow.keras.layers import Conv2D, MaxPooling2D
from tensorflow.keras.regularizers import l2
import matplotlib.pyplot as plt
from pylab import rcParams
rcParams['figure.figsize'] = 5, 5

# cifar10 이미지 로딩
(X_train, y_train), (X_test, y_test) = cifar10.load_data()

print ("Training data:")
print ("Number of examples: ", X_train.shape[0])
print ("Number of channels:",X_train.shape[3]) 
print ("Image size:", X_train.shape[1], X_train.shape[2])
print
print ("Test data:")
print ("Number of examples:", X_test.shape[0])
print ("Number of channels:", X_test.shape[3])
print ("Image size:", X_test.shape[1], X_test.shape[2]) 

print(X_train.shape, X_train.dtype)

# 이미지 시각화
fig = plt.figure(figsize=(20, 20))

for i in range(1,21):
    plt.subplot(141)
    print(i)
    fig.add_subplot(5, 4, i)
    plt.imshow(X_train[i], interpolation="bicubic")

    plt.grid(False)
plt.show()

# 이미지 정규화 ( 스케일링 )
print ("mean before normalization:", np.mean(X_train)) 
print ("std before normalization:", np.std(X_train))

mean=[0,0,0]
std=[0,0,0]
newX_train = np.ones(X_train.shape)
newX_test = np.ones(X_test.shape)
for i in range(3):
    mean[i] = np.mean(X_train[:,:,:,i])
    std[i] = np.std(X_train[:,:,:,i])
    
for i in range(3):
    newX_train[:,:,:,i] = X_train[:,:,:,i] - mean[i]
    newX_train[:,:,:,i] = newX_train[:,:,:,i] / std[i]
    newX_test[:,:,:,i] = X_test[:,:,:,i] - mean[i]
    newX_test[:,:,:,i] = newX_test[:,:,:,i] / std[i]
        
    
X_train = newX_train
X_test = newX_test

print ("mean after normalization:", np.mean(X_train))
print ("std after normalization:", np.std(X_train))
print(X_train.max())

# # 모델 구현 및 훈련 - 재구현 필요
# num_classes = 10     
# batchSize = 512                   #-- Training Batch Size
# num_epochs = 20                   #-- Number of epochs for training   
# learningRate= 0.01                #-- Learning rate for the network
# img_rows = 32                     #-- input image dimensions
# img_cols = 32 
# img_ch=3

# model = Sequential()
# model.add(Conv2D(64, (3, 3), activation='relu', padding='same', input_shape=(img_rows, img_cols, img_ch)))
# model.add(MaxPooling2D(pool_size=(2, 2)))
# model.add(Conv2D(64, (3, 3), activation='relu', padding='same'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
# model.add(Conv2D(128, (3, 3), activation='relu', padding='same'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
# model.add(Conv2D(256, (3, 3), activation='relu', padding='same'))
# model.add(MaxPooling2D(pool_size=(2, 2)))
# model.add(Flatten())
# model.add(Dense(512, activation='relu'))
# model.add(Dense(512, activation='relu'))
# model.add(Dense(num_classes, activation='softmax'))
# model.compile(loss='sparse_categorical_crossentropy', optimizer='adam',  metrics=['accuracy'])

# print(X_train.shape)
# print(y_train.shape)

# model.fit(X_train, y_train, batch_size=batchSize, epochs=num_epochs)

# # 모델 평가
# result = model.evaluate(X_test, y_test)
# print(result)
