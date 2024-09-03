package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/hsc-go/go-gin-api-medium/pkg/controllers"
	"github.com/hsc-go/go-gin-api-medium/pkg/middlewares"
)

func AuthRoutes(r *gin.Engine) {
	r.POST("/login", controllers.Login)
	r.POST("/signup", controllers.Signup)
	r.GET("/", middlewares.IsAuthorized, controllers.Home)
	r.GET("/logout", controllers.Logout)
}
