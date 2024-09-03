package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name     string `json:"name"`
	Email    string `json:"email" gorm:"primary_key"`
	Password string `json:"password" gorm:"unique"`
}
