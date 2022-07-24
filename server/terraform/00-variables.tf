variable "name" {
  type    = string
  default = "example-app"
}

variable "name_alphanumeric" {
  type    = string
  default = "exampleapp"
}

variable "env" {
  type    = string
  default = "dev"
}

variable "image_name" {
  type = string
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "container_port" {
  type    = number
  default = 3000
}

variable "domain_name" {
  type    = string
}