from django.shortcuts import render, redirect


# Create your views here.
# Initial index.html view
def index(request):
    return render(request, 'index.html', {})


# Title Link to return  to index.html
def go_home(request):
    return redirect('index')
