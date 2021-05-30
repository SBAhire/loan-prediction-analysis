from django.shortcuts import render
import pickle as pkl

def predictor(request):
    model = pkl.load(open('predictor/RFCLoanModel.sav','rb'))
    fields = ['gender','married','depend','edu','self-emp','app-inc','coapp-inc','amount','months','credit','property']
    application = []
    if request.method == 'POST':
        for i in fields:
            application.append(int(request.POST.get(i)))
        if model.predict([application])=='N':
            return render(request,'predictor/reject.html')
        else: return render(request,'predictor/accept.html')
    return render(request,'predictor/index.html')
