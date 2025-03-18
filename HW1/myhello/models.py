from django.db import models
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length = 100)
    content = models.TextField(blank = True)
    photo = models.URLField(blank = True)
    location = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.title
    
class Course(models.Model):
    department = models.CharField(max_length=100)  # 開課單位
    course_name = models.CharField(max_length=200)  # 課程名稱
    instructor = models.CharField(max_length=100)  # 授課老師

    def __str__(self):
        return f"{self.course_name} ({self.department})"
