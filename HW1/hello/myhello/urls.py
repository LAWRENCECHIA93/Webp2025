from django.urls import path
from . import views

#urlpatterns = [
    #path('', views.HelloApiView.as_view(), name='index'),
#]
urlpatterns = [
    path('courselist/', views.course_list, name='course_list'),  # 取得課程列表
    path('addcourse/', views.add_course, name='add_course'),  # 新增課程
]