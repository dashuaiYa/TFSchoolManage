import Index from '../components/Index'

import Login from '../components/Login'

import StudentList from '../components/student/Student'
import StudentAdd from '../components/student/Student-add'

import Teacher from '../components/teacher/Teacher'
import TeacherAdd from '../components/teacher/Teacher-add'
import TeacherEdit from '../components/teacher/Teacher-edit'

import Class from '../components/class/Class'
import ClassAdd from '../components/class/Class-add'

import Grade from '../components/grade/Grade'

// import Classroom from '../components/classroom/Classroom'

// import Notice from '../components/notice/Notice'

export default [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/student_list',
    name: 'Studentlist',
    component: StudentList,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/student_add',
    name: 'StudentAdd',
    component: StudentAdd,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/teacher_add',
    name: 'TeacherAdd',
    component: TeacherAdd,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/teacher_edit',
    name: 'TeacherEdit',
    component: TeacherEdit,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/grade',
    name: 'Grade',
    component: Grade,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/class_list',
    name: 'Class',
    component: Class,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/class_add',
    name: 'ClassAdd',
    component: ClassAdd,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/classroom',
  //   name: 'Classroom',
  //   component: Classroom
  // },
  // {
  //   path: '/notice',
  //   name: 'Notice',
  //   component: Notice
  // }
]