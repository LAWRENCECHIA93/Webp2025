from django.http import HttpResponse
from django.http import JsonResponse

def index(request):
    my_name = request.POST.get('name', 'CGU')
    return HttpResponse('Hello' + my_name)


from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.serializers.json import DjangoJSONEncoder
from .models import Course
from .serializers import CourseSerializer
import json
import logging

from .models import Post

logger = logging.getLogger('django')

class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name',None)
        if my_name:
            retValue = {}
            retValue['data'] = "Hello" + my_name
            return Response(retValue, status = status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status = status.HTTP_400_BAD_REQUEST
            )
        

@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo','')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()
    logger.debug(" ************** myhello_api: " + title)
    if title:
        return Response({"data": title + " insert!"}, status = status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )


@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse({"data": list(posts)}, safe=False, status=status.HTTP_200_OK)


@api_view(['GET'])
def course_list(request):
    courses = Course.objects.all()  # 查詢所有課程
    serializer = CourseSerializer(courses, many=True)  # 序列化
    return Response(serializer.data)


@api_view(['POST'])
def add_course(request):
    if request.method == 'POST':
        serializer = CourseSerializer(data=request.data)  # 使用序列化器處理 POST 資料
        if serializer.is_valid():
            serializer.save()  # 儲存到資料庫
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        