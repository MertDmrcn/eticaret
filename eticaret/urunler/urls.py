from django.urls import path
from . import views



# http://127.0.0.1:8000/   => index.html
# http://127.0.0.1:8000/index    => index.html
# http://127.0.0.1:8000/blogs    => index.html

urlpatterns = [
    path("", views.index),
    path("index", views.index),
   path("ürünler/erkek.html", views.erkek),
   path("ürünler/erkek2.html", views.erkek2),
   path("ürünler/kadin.html", views.kadın),
   path("magazalar.html", views.magazaalar),
   
    
]
