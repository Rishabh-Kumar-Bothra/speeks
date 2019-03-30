## Speeks – Improves public speaking

It is an application which revolve around solving the public speaking problems and act as personal public speaking analyser which detect your flaws and help you improving your public speaking/speaking skills.

The analysis of the content would be done in following parameters:
Grammar check
Sentiment analysis
Confidence level
Expression detection


Grammar check would detect all grammatical errors like missing verb, duplicate words, quantifier misuse, issue with sentence fragment etc. Sentiment analysis would detect the sentiments of the audio file and will provide with the probability that the content have happy, sad, surprise and neutral emotions.  
We would be using VGGish model time distributed LSTM for confidence level detection.This would provide us with per second confidence level of the speaker which can be further analysed to detect which part of the speech was most confident and which was the least confident.
Expression detection would be done with VGGFace model.This would give us the facial expression per frame of the speaker.
Using all these parameters we would analyse the speech of the speaker.

According to the MIT research paper on language acoustic 2009 these were one of those parameters which define the speech of a person
