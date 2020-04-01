from django.urls import path
from api.views import vacancy_list, vacancy_detail, vacancy_by_company, company_list, company_detail, vacancy_sorted

urlpatterns = [
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancy_sorted),
    path('companies/', company_list),
    path('companies/<int:vk>/', company_detail),
    path('companies/<int:vk>/vacancies/', vacancy_by_company)
]