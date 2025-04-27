import React from 'react'
import { useAuth } from './contexts/AuthContext'
import { Navigate } from 'react-router-dom'

function Dashboard() {
  const { user } = useAuth()

  if (!user) {
    // Если пользователь не авторизован, перенаправляем на страницу входа
    return <Navigate to="/LoginPage" replace />
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Личный кабинет</h1>
      <p>Добро пожаловать, {user.email || user.name || 'пользователь'}!</p>
      {/* Здесь можно добавить содержимое личного кабинета */}
    </div>
  )
}

export default Dashboard
