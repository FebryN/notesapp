from django.urls import path
from . import views

urlpatterns = [
    path('', views.NoteListView.as_view()),
    # path('notes/', views.getNotes, name="notes"),
    # # path('notes/create/', views.createNote, name="create-notes"),
    # # path('notes/<str:pk>/update/', views.updateNote, name="update-note"),
    # # path('notes/<str:pk>/delete/', views.deleteNote, name="delete-note"),
    path('notes/<str:pk>/', views.NoteDetailView.as_view()),
]
