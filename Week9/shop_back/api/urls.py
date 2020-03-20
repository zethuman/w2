from django.urls import path

from api.views import product_list, product_detail, category_list, category_detail, products_by_categories

urlpatterns = [
    path('products/', product_list),
    path('products/<int:product_id>/', product_detail),
    path('categories/', category_list),
    path('categories/<int:pk>/', category_detail),
    path('categories/<int:pk>/products/', products_by_categories)
]