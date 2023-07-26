from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request,"index.html")



def erkek(request):
    return render(request, "erkek.html")

def kadın(request):
    return render(request, "kadin.html")

def erkek2(request):
    return render(request, "erkek2.html")

def cocuk(request):
    return render(request, "cocuk.html")

def magazaalar(request):
    return render(request, "magazalar.html")



