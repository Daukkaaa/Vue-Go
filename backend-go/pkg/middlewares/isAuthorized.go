package middlewares

import (
	"github.com/gin-gonic/gin"
	"github.com/hsc-go/go-gin-api-medium/pkg/utils"
)

func IsAuthorized(c *gin.Context) {
	cookie, err := c.Cookie("token")

	if err != nil {
		c.JSON(401, gin.H{"error": "unauthorized cookie"})
		c.Abort()
		return
	}

	claims, err := utils.ParseToken(cookie)

	if err != nil {
		c.JSON(401, gin.H{"error": "unauthorized parse"})
		c.Abort()
		return
	}

	c.Set("email", claims.Subject)
	c.Next()
}
